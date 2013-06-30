var CYODM = (function() {
	function CYODM() {
		this.story,
		this.params = {};
	};
	
	CYODM.prototype.newParam = function(key, value) {
		this.params[key] = encodeURIComponent(value);
	};
	
	CYODM.prototype.setStory = function() {
		this.story = parseInt(document.getElementById("story").value);
		socket.message({"action":"setStory","id":this.story});
	};
	
	CYODM.prototype.sendChat = function(to, message) {
		socket.message({"action":"talk","talk":message, "user":to}); 
	};
	
	CYODM.prototype.createStory = function(title) {
		socket.message({"action":"save","node":{
			"type":"story",
			"title": title
		}});
	};
	
	CYODM.prototype.createPassage = function(parent, text) {
		socket.message({"action":"save","parent":parent, "node":{
			"type":"passage",
			"text":text
		}});
	};
	
	CYODM.prototype.dudes = function(data) {
		$(".connected span").html(data.count);
	};
	
	CYODM.prototype.chat = function(data) {
		$(".chat").append("<span>"+data.from+": "+data.message+"</span>");
		$("#chat-to").val(data.from);
	};
	
	CYODM.prototype.pushStory = function(data) {
		$(".story").append("<div class=\"passage\">"+data.message+"</span>");
	};
	
	CYODM.prototype.updatePassage = function(id, text) {
		console.log("update:"+id+"text"+text);
		socket.message({"action":"updatePassage", "id":id, "text": text});
	};
	
	CYODM.prototype.updateStory = function(id, text) {
		var div = document.createElement("div");
		div.contentEditable = true;
		div.className = 'passage';
		div.id = id;
		div.innerHTML = text;
		$(".story").append(div);
	};
	
	return CYODM;
})();

//TODO: not this

$('#chat-send').on('click', function() {
	cyodm.sendChat($('#chat-to').val(), $('#chat-mesage').val());
});

$('#story-update').on('click', function() {
	cyodm.setStory();
});

$( document).on( 'focus', '[contenteditable]:not(.active)', function() {
	$(this).addClass("active");
	$(this).append('<div class="save">save</div>');
});

$( document).on( 'click', '.save', function() {
	cyodm.updatePassage($(this).parent('.passage').attr('id'), $(this).parent('.passage').html());
	$(this).parent('.passage').removeClass("active");
	$(this).remove();
});

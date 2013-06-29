var CYODM = (function() {
	function CYODM() {
		this.story,
		this.params = {};
	};
	
	CYODM.prototype.setStory = function() {
		this.story = parseInt(document.getElementById("story").value);
		socket.message({"action":"setStory","id":this.story});
	};
	
	CYODM.prototype.newParam = function(key, value) {
		this.params[key] = encodeURIComponent(value);
		console.log(this.params);
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
	
	// the story has been updated
	CYODM.prototype.pushStory = function(data) {
		$(".story").append("<div class=\"passage\">"+data.message+"</span>");
	};
	
	CYODM.prototype.updatePassage = function(id, text) {
		console.log("update:"+id+"text"+text);
		socket.message({"action":"updatePassage", "id":id, "text": text});
	};
	
	CYODM.prototype.updateStory = function(id, text) {
		$(".story").append('<div class="passage" id="'+id+'" contenteditable="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>');
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

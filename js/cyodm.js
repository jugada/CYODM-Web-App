var CYODM = (function() {
	function CYODM() {
		this.story,
		this.params = {};
		
		var self = this;
		document.addEventListener("input", function(e){
		  self.updatePassage(e.srcElement.id, e.srcElement.innerHTML);
		}, true);
	};
	
	CYODM.prototype.connect = function() {
		this.story = document.getElementById("story").value;
		// socket.message({"action":"setStory", "id": this.story});
		//this.updateStory(herpderp);
	};
	
	CYODM.prototype.newParam = function(key, value) {
		this.params[key] = encodeURIComponent(value);
		console.log(this.params);
	};
	
	CYODM.prototype.pushStory = function() {
			socket.message(message); 
	};
	
	CYODM.prototype.dudes = function(data) {
		$(".connected span").html(data.connected);
	};
	
	CYODM.prototype.chat = function(data) {
		$(".chat").append("<span>"+data.from+": "+data.message+"</span>");
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
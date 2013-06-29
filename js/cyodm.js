var CYODM = (function() {
	function CYODM() {
		this.story;
		this.host = "192.168.1.78:9000/cyodm/story";
	};
	
	CYODM.prototype.connect = function() {
		this.socket = new Socket(this.host);
		this.socket.connect();
	};
	
	CYODM.prototype.getStory = function() {
			websocket.send(message); 
	};
	
	CYODM.prototype.pushStory = function() {
			websocket.send(message); 
	};
	
	CYODM.prototype.updateStory = function() {
		
	};
	
	return CYODM;
})();
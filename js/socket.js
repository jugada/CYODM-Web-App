var Socket = (function() {
	function Socket(url) {
		this.ws = "ws://" + url,
		this.socket,
		this.user;
	};
	
	Socket.prototype.connect = function() {
		this.socket = new WebSocket(this.ws + "?user=" + user.username);
	};
	
	Socket.prototype.disconnect = function() {
		this.socket.close(); 
	};
	
	Socket.prototype.onopen = function(evt) {
		
	};
	
	Socket.prototype.onclose = function(evt) {
		
	};
	
	Socket.prototype.onmessage = function(evt) {
		
	};
	
	Socket.prototype.onerror = function(evt) {
		
	};
	
	return Socket;
})();
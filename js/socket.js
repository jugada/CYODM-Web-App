var Socket = (function() {
	function Socket(url) {
		this.ws = "ws://192.168.1.78:9000/cyodm/story",
		this.socket = new WebSocket(this.ws + "?user=" + user.username);
		
		this.socket.onopen = function(evt) {
			 console.log({"open":evt});
		};
		
		this.socket.onclose = function(evt) { 
			 console.log({"close":evt});
		};
		
		this.socket.onmessage = function(evt) {
			var response = jQuery.parseJSON(evt.data);
			if (typeof cyodm[response.type] == 'undefined') {
				console.log("CYODM.prototype."+response.type+" does not exist.");
			} else {
				console.log(response);
				cyodm[response.type](response);
			}
		};
		
		this.socket.onerror = function(evt) { 
			 console.log({"error":evt});
		};
		
	};
	
	Socket.prototype.message = function(qweqwe) {
		this.socket.send(JSON.stringify(qweqwe));
	};
	
	return Socket;
})();
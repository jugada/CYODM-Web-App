var Socket = (function() {
	function Socket() {
		this.ws = "ws://192.168.1.78:9000/cyodm/story";
		this.socket;
		this.user;
	}
	
	Socket.prototype.connect = function() {
		alert(user.username);
		this.socket = new WebSocket(this.ws + "?user=" + user.username);
	}
	
	Socket.prototype.login = function() {
		
	}
	
	return Socket;
})();

var User = (function() {
	function User(username) {
		this.username = username;
	}
	return User;
})();
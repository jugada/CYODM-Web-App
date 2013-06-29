var User = (function() {
	function User(username) {
		this.username = username;
	};
	
	User.prototype.startSession = function() {
		// TODO: check for session cookies, if not prompt
		this.username = prompt("Please enter your username:", "");
	};
	
	User.prototype.chat = function() {
		var action = "talk";
		var talk = "herpderp";
		var message = "asdasd";
	};
	
	return User;
})();
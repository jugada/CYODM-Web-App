var User = (function() {
	function User() {
		this.username;
	};
	
	User.prototype.startSession = function() {
		// TODO: check for session cookies
		this.username = prompt("Please enter your username:", "");
	};
	
	return User;
})();
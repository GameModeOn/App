api = 'http://gamemodeon.de/app/2/';
errmsg = 'Error! Retry?';


function init() {
//	pushNotification.register(successHandler, errorHandler, {"senderID":"541842502965","ecb":"onPush"});
	if(window.localStorage.getItem('autologin') == 'true') {
		var user = window.localStorage.getItem('user');
		var passwd = window.localStorage.getItem('passwd');
		login(user, passwd);
	} else {
		$('#login').show();
	}
	$('#main').show();
}

function cleardefaultcontent() {
	if($(this).val() == 'Username') {
		$(this).val('');
	}
	if($(this).val() == 'Passwort'){
		$(this).val('');
	}
}

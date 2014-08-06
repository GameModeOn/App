api = 'http://gamemodeon.de/app/1/';


function init() {
	if(window.localStorage.getItem('autologin') == 'true') {
		alert('autologin');
		var user = window.localStorage.getItem('user');
		var passwd = window.localStorage.getItem('passwd');
		login(user, passwd);
	} else {
		$('#login').show();
	}
	$('#output').show();
//	output();
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

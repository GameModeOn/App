api = 'http://gamemodeon.de/app/1/';

//main.js
document.addEventListener('deviceready', init, true);
$('[name="user"]').click(cleardefaultcontent);
$('[name="passwd"]').click(cleardefaultcontent);

//login.js
$('#btnLogin').click(login);


function init() {
	if(window.localStorage.getItem('autologin') == 'true') {
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
api = 'https://gamemodeon.de/app/2/';
errmsg = 'Error! Retry?';


function init() {
	if(window.localStorage.getItem('autologin') == 'true') {
		var user = window.localStorage.getItem('user');
		var passwd = window.localStorage.getItem('passwd');
		login(user, passwd);
	} else {
		$('#login').show();
	}
	
	$('#main').show();
	
	if(window.localStorage.getItem('interval') == null) {
		window.localStorage.setItem('interval', '1000');
	}
	$('#interval').val(window.localStorage.getItem('interval'));
	$('#intervaltxt').html(window.localStorage.getItem('interval')/1000);
}

function cleardefaultcontent() {
	if($(this).val() == 'Username') {
		$(this).val('');
	}
	if($(this).val() == 'Passwort'){
		$(this).val('');
	}
}

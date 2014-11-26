api = 'https://gamemodeon.de/app/1/';
errmsg = 'Error! Retry?';


function init() {
	if(window.localStorage.getItem('autologin') == 'true') {
		var user = window.localStorage.getItem('user');
		var passwd = window.localStorage.getItem('passwd');
		login(user, passwd);
	} else {
		$('#login').show();
	}
	
	window.plugins.webintent.getExtra(window.plugins.webintent.EXTRA_TEXT, function (url) {
		alert(url);
	}, function() { //Fail
		alert("error");
	});

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

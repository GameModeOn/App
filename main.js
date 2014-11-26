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
/*	window.plugins.webintent.getExtra(WebIntent.EXTRA_TEXT, 
		function(url) {
			//alert(url);
			// url is the value of EXTRA_TEXT
		}, function() {
			alert("no extra");
			// There was no extra supplied.
		}
	);*/
}

function cleardefaultcontent() {
	if($(this).val() == 'Username') {
		$(this).val('');
	}
	if($(this).val() == 'Passwort'){
		$(this).val('');
	}
}

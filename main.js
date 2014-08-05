api = 'http://gamemodeon.de/app/1/';


// EVENTS
document.addEventListener('deviceready', function(){
	$('#btnLogin').click(login);
	init;
}, true);


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


function login(user, passwd) {
	user = user || $('[name="user"]').val();
	passwd = passwd || $('[name="passwd"]').val();
	alert(user+' '+passwd);
	$.post(api+'login.php', { user: user, passwd: passwd }).done(function(data) {
		if(data != '') {
			sid = data;
			$('#login').hide();
			$('#input').show();
			$('#btnLogout').show();
			if($('[name="savelogin"]').prop('checked')) {
				savelogin(user, passwd);
			}
		} else {
			$('#errLogin').show();
		}
	});
}
function savelogin(user, passwd) {
	window.localStorage.setItem('user', user);
	window.localStorage.setItem('passwd', passwd);
	window.localStorage.setItem('autologin', 'true');
}
function logout() {
	window.localStorage.removeItem('user');
	window.localStorage.removeItem('passwd');
	window.localStorage.removeItem('autologin');
	$('#input').hide();
	$('#login').show();
	$('#btnLogout').hide();
	closemenu();
}
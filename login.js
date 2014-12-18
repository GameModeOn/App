function login(user, passwd) {
	spinnerplugin.show();
	
	$.post(api+'login.php', { user: user, passwd: passwd }).done(function(data) {
		if(data != '') {
			sid = data;
			output();
			
			$('#login').hide();
			$('#input').show();
			$('#btnLogout').show();
			
			if($('#savelogin').prop('checked')) {
				savelogin(user, passwd);
			}
			$('#user').val('');
			$('#passwd').val('');
		} else {
			window.localStorage.removeItem('autologin');
			window.plugins.toast.showLongBottom('Login failed!');
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
	togglemenu();
}

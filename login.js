function login() {
	user = $('[name="user"]').val();
	passwd = $('[name="passwd"]').val();
	$('#btnLogin').val('..loading..');
	$.post(api+'login.php', { user: user, passwd: passwd }).done(function(data) {
		alert(data);
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
		$('#btnLogin').val('Login');
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
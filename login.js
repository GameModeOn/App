function login(user, passwd) {
	$('#btnLogin').val('..loading..');
	
	$.post(api+'login.php', { user: user, passwd: passwd }).done(function(data) {
		if(data != '') {
			alert('success');
			sid = data;
			
			$('#login').hide();
			$('#input').show();
			$('#btnLogout').show();
			
			if($('[name="savelogin"]').prop('checked')) {
				savelogin(user, passwd);
			}
		} else {
			window.localStorage.removeItem('autologin');
			$('#errLogin').show();
		}
		
		$('[name="user"]').val('');
		$('[name="passwd"]').val('');
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
	togglemenu();
}

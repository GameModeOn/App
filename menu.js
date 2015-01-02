function togglemenu() {
	$('#main').toggle()
	$('#menu').toggle()
}

function initMenu() {
	if(window.localStorage.getItem('interval') == null) { 
	        window.localStorage.setItem('interval', '1000');
	}       
	$('#interval').val(window.localStorage.getItem('interval'));
	$('#intervaltxt').html(window.localStorage.getItem('interval')/1000);

	if(window.localStorage.getItem('eco') == null) {
		window.localStorage.setItem('eco', 'false');
	}
	if(window.localStorage.getItem('eco') == 'true') {
		$('#eco').prop('checked', 'true');
	}

	if(window.localStorage.getItem('push') == null) {
		window.localStorage.setItem('push', 'true');
	}
}



function interval(intervalval) {
	window.localStorage.setItem('interval', $('#interval').val());
	$('#intervaltxt').html($('#interval').val()/1000);
}

function eco() {
	if($('#eco').prop('checked')) {
		window.localStorage.setItem('eco', 'true');
	} else {
		window.localStorage.setItem('eco', 'false');
	}
}

function push() {
	if($('#push').prop('checked')) {
		window.localStorage.setItem('push', 'true');
	} else {
		window.localStorage.setItem('push', 'false');
	}
}

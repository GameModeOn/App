function input(msg) {
	spinnerplugin.show();
	
	$.post(api+'input.php', { sid: sid, msg: msg }).done(function(data) {
		if(data == 'true') {
			$('#msg').val('');
		} else {
			navigator.notification.alert('Shouting failed!');
		}
		spinnerplugin.hide();
	});
}

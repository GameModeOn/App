function input(msg) {
	spinnerplugin.show();
	
	$.post(api+'input.php', { sid: sid, msg: msg }).done(function(data) {
		if(data == 'true') {
			$('#msg').val('');
		} else {
			window.plugins.toast.showLongBottom('Shouting failed!');
		}
		spinnerplugin.hide();
	});
}

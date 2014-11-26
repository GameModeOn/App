function input(msg) {
	spinnerplugin.show();
	
	$.post(api+'input.php', { sid: sid, msg: msg }).done(function(data) {
		if(data == 'true') {
			$('#msg').val('');
			$('#btnShout').val('SHOUT');
		} else {
			$('#btnShout').val(errmsg);
		}
		spinnerplugin.hide();
	});
}

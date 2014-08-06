function input(msg) {
	$('#btnShout').val('..loading..');
	$.post(api+'input.php', { sid: sid, msg: msg }).done(function(data) {
		if(data == 'true') {
			$('#msg').val('');
			$('#btnShout').val('SHOUT');
		}
		$('#btnShout').val(errmsg);
	});
}

function input(msg) {
	$('#input').val('..loading..');
	$.post(api+'input.php', { sid: sid, msg: msg }).done(function(data) {
		if(data == 'true') {
			$('#msg').val('');
			$('#input').val('SHOUT');
		}
		$('#input').val(errmsg);
	});
}

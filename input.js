function input(msg) {
	alert(msg);
	alert(sid);
	$('#btnShout').val('..loading..');
	$.post(api+'input.php', { sid: sid, msg: msg }).done(function(data) {
		alert(data);
		if(data == 'true') {
			$('#msg').val('');
			$('#btnShout').val('SHOUT');
		}
		$('#btnShout').val(errmsg);
	});
}

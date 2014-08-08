function output() {
	$.post(api+'output.php', { sid: sid }).done(function(data) {
		$('#output').html(data);
	});
	setTimeout('output()', 3000);
	$('#output').show();
}
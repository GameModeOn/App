function output() {
	$.post(api+'output.php', { sid: sid }).done(function(data) {
		alert(data);
		$('#output').text(data);
	});
	setTimeout("output()", 3000);
}
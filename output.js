function output() {
	$.post(api+'output.php', { sid: sid, md5ob: window.localStorage.getItem('lastOutputMD5') }).done(function(data) {
		var regex = new RegExp('<!--(.*?)-->');
		var regex = regex.exec(data);
		if(window.localStorage.getItem('lastOutputMD5') != regex[1]) {
			window.localStorage.setItem('lastOutputMD5', regex[1]);
			window.localStorage.setItem('lastOutput', data);
			$('#output').html(data);
		}
	});
	setTimeout('output()', 3000);
	$('#output').show();
}

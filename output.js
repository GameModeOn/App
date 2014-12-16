function output() {
	alert('lastOutputMD5'+window.localStorage.getItem('lastOutputMD5'));
	$.post(api+'output.php', { sid: sid, md5ob: window.localStorage.getItem('lastOutputMD5') }).done(function(data) {
		var regex = new RegExp('<!--(.*)-->');
		var regex = regex.exec(data);
		alert('regex[1]'+regex[1]);
		if(window.localStorage.getItem('lastOutputMD5') != regex[1]) {
			window.localStorage.setItem('lastOutputMD5', regex[1]);
			window.localStorage.setItem('lastOutput', data);
			$('#output').html(data);
			window.plugins.toast.showLongBottom('new content');
		}
	});
	setTimeout('output()', 3000);
	$('#output').show();
}

function output() {
	alert(window.localStorage.getItem('lastOutput'));
	$.post(api+'output.php', { sid: sid, md5ob: window.localStorage.getItem('lastOutput') }).done(function(data) {
		alert(data);
		var regex = new RegExp('<!--(.*?)-->');
		var regex = regex.exec(data);
		if(window.localStorage.getItem('lastOutput') != regex[1]) {
			alert('quark');
			window.localStorage.setItem('lastOutput', regex[1]);
			$('#output').html(data);
		}
	});
	setTimeout('output()', 3000);
	$('#output').show();
}

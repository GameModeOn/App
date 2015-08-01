function output(md5) {
	$.post(api+'output.php', { sid: sid, md5ob: md5, eco: window.localStorage.getItem('eco') }).done(function(data) {
		var regex = new RegExp('<md5ob(.*?)md5ob>');
		var regex = regex.exec(data);
		if(md5 != regex[1]) {
			md5 = regex[1];
			$('#output').html(data);
		}
		setTimeout(output, window.localStorage.getItem('interval'), md5);
	});
}

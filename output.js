function output(md5) {
	$.post(api+'output.php', { sid: sid, md5ob: md5 }).done(function(data) {
		var regex = new RegExp('<!--(.*?)-->');
		var regex = regex.exec(data);
		if(md5 != regex[1]) {
			md5 = regex[1];
			$('#output').html(data);
		}
		setTimeout(output, window.localStorage.getItem('interval'), md5);
	});
}

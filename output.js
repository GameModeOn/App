function output(md5) {
	$.post(api+'output.php', { sid: sid, md5ob: md5 }).done(function(data) {
		var regex = new RegExp('<!--(.*?)-->');
		var regex = regex.exec(data);
		if(md5 != regex[1]) {
			md5 = regex[1];
			alert('set '+md5);
			$('#output').html(data);
		}
		alert(window.localStorage.getItem('interval'));
		setTimeout(output, window.localStorage.getItem('interval'), md5);
	});
}

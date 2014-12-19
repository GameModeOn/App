function output(md5) {
	alert('begin '+md5);
	$.post(api+'output.php', { sid: sid, md5ob: md5 }).done(function(data) {
		alert('post '+md5);
		var regex = new RegExp('<!--(.*?)-->');
		var regex = regex.exec(data);
		if(md5 != regex[1]) {
			md5 = regex[1];
			alert('set '+md5);
			$('#output').html(data);
		}
	});
	setTimeout(function() {
		output(md5);
	}, 1000);
	$('#output').show();
}

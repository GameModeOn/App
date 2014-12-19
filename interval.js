function interval(intervalval) {
	window.localStorage.setItem('interval', intervalval);
	$('#intervaltxt').html(intervalval/1000+' Sekunden Interval');
}

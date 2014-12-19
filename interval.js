function interval(intervalval) {
	alert('intervalval '+intervalval);
	window.localStorage.setItem('interval', intervalval);
	$('#intervaltxt').html(intervalval);
}

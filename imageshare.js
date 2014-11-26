function pickimage() {
	alert('btnImage');
	window.imagePicker.getPictures(
		function(results) {
			for(var img in results) {
				alert(img);
			}
		}, function(error) {
			alert(error);
		}, {
			maximumImagesCount: 1
		}
	);
}

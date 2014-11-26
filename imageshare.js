function pickimage() {
	window.imagePicker.getPictures(
		function(results) {
			alert(results);
		}, function(error) {
			alert(error);
		}, {
			maximumImagesCount: 1
		}
	);
}

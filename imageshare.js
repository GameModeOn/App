funciton pickimage() {
	window.imagePicker.getPictures(
		function(results) {
			for(var img in results) {
				alert(img);
			}
		}, function(error) {
			alert(error);
		}
	);
}

function pickimage() {
	window.imagePicker.getPictures(
		function(result) {
			uploadimage(result);
		}, function(error) {
			alert(error);
		}, {
			maximumImagesCount: 1
		}
	);
}

function uploadimage(file) {
	alert(file);
	MediaCrush.upload(file, function(media) {
		spinnerplugin.show();
		media.wait(function() {
			spinnerplugin.hide();
			alert(media.status);
			alert(media.url);
		});
	});
}

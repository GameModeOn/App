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

function uploadimage(fileURL) {
	spinnerplugin.show();
	var ft = new FileTransfer();
	ft.onprogress = function(progress) { alert(progress.loaded+' / '+progress.total); };
	ft.upload(fileURL, encodeURI('https://mediacru.sh/api/upload/file'), function(success) { alert(success); }, function(error) { alert(error); });
	spinnerplugin.hide();
}

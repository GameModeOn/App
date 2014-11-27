function upload() {
	var file = file.entry.fullPath;
	alert(file);
	
	var ft = new FileTransfer();
	ft.onprogress = function(progress) { alert(progress.loaded+' / '+progress.total); };
	ft.upload(file, encodeURI('https://mediacru.sh/api/upload/file'), function(success) { alert(success); }, function(error) { alert(error); });
/*	spinnerplugin.show();
	MediaCrush.upload(file, function(media) {
		media.wait(function() {
			spinnerplugin.hide();
			alert(media.status);
			alert(media.url);
		});
	});*/
}

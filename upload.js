function ObjectDump(obj, name) {
  this.result = "[ " + name + " ]\n";
    this.indent = 0;
     
       this.dumpLayer = function(obj) {
           this.indent += 2;
	    
	        for (var i in obj) {
		      if(typeof(obj[i]) == "object") {
		              this.result += "\n" +
			                "              ".substring(0,this.indent) + i +
					          ": " + "\n";
						          this.dumpLayer(obj[i]);
							        } else {
								        this.result +=
									          "              ".substring(0,this.indent) + i +
										            ": " + obj[i] + "\n";
											          }
												      }
												       
												           this.indent -= 2;
													     }
													      
													        this.showResult = function() {
														    var pre = document.createElement('pre');
														        pre.innerHTML = this.result;
															    document.body.appendChild(pre);
															      }
															       
															         this.dumpLayer(obj);
																   this.showResult();
																   }

function selectupload() {
	navigator.camera.getPicture(upload,
		function(e) {
			alert('error: '+e);
		}, {
			sourceType : 0
		}
	);
}

function upload(file) {
	var ft = new FileTransfer();
	ft.onprogress = function(progress) { alert(progress.loaded+' / '+progress.total); };
	ft.upload(file, encodeURI('https://mediacru.sh/api/upload/file'), function(success) { alert(ObjectDump(success, 'success')); }, function(error) { alert(ObjectDump(error, 'error')); });
	
/*	spinnerplugin.show();
	MediaCrush.upload(file, function(media) {
		media.wait(function() {
			spinnerplugin.hide();
			alert(media.status);
			alert(media.url);
		});
	});*/
}

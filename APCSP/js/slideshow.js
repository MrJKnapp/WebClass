var images = [
	'<img src="EmmaMat.jpg" />',
	'<img src="EmmaMap.jpg" />',
	'<img src="EmmaLion.jpg" />'
	];

while( true ){
	images.foreach(function(image){
		document.write(image);
	});
}

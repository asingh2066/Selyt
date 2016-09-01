var storeImageJson = function(imageJson) {

};

var imageToJson = function(image) {
	return JSON.stringify(image);
};

var storeImage = function(image) {
	var imgJson = imageToJson(image);
};

var loadImages = function() {
	var dir = "../img/browsing";
	var results = [];
	var filesystem = require("fs");

	filesystem.readdirSync(dir).forEach(function(file) {
		results.push(file);
	});

	return results;
};

var loadBrowsingList = function() {
	var imagePaths = loadImages();
	var container = document.createElement('div');
	container.id = "wrapper";

	$('body').append(container);

	var html = '';
	for (var i = 1; i <= imagePaths.length; i++) {
		html += '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src=" ' + imagePaths[i] + '"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right"><a href="canvas.html">mode_edit</a></i></span></div>';
	}

	$('#wrapper').append(html);
};

loadBrowsingList();
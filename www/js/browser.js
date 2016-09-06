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

var editImage = function(image) {

}

var loadBrowsingList = function() {
	// var imagePaths = loadImages();
	var container = document.createElement('div');
	container.id = "wrapper";

	$('body').append(container);
	var imageNames=["Fat_turtle", "Happy_fish", "Harry_the_Horse", "Spaceman"];
	var imageReadableNames=["Fat Turtle", "Happy fish", "Harry the horse", "Spaceman"];
	var html = '';
	for (var i = 0; i <= 3; i++) {
		imageName = "img/browsing/" + imageNames[i] + ".jpg";

		html += '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + imageName + '"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">' + imageReadableNames[i] + '<i class="material-icons right"><a class="editable">mode_edit</a></i></span></div>';
	}

	$('#wrapper').append(html);
};

loadBrowsingList();

$('.editable').click(function() {
	var image = ($($(this).parent().parent().parent().siblings()[0]).find('.activator').attr('src'));
	console.log(image);
	window.canvasImage = image;
	document.cookie = "canvas_image=" + image + ";path=/";

	window.location.href = "canvas.html?canvas_image=" + image;
});
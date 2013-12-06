var myApp = angular.module('myApp', []);

myApp.controller('AudioListController', function($scope) {
	$scope.audios = [
		{
			'name' : 'Audio 1',
			'author' : 'Author Name',
			'url' : 'http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3'
		},
		{
			'name' : 'Audio 2',
			'author' : 'Author Name',
			'url' : 'http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3'
		},
		{
			'name' : 'Audio 3',
			'author' : 'Author Name',
			'url' : 'http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3'
		},
		{
			'name' : 'Audio 4',
			'author' : 'Author Name',
			'url' : 'http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3'
		},
		{
			'name' : 'Audio 5',
			'author' : 'Author Name',
			'url' : 'http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3'
		},
		{
			'name' : 'Audio 6',
			'author' : 'Author Name',
			'url' : 'http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3'
		},
		{
			'name' : 'Audio 7',
			'author' : 'Author Name',
			'url' : 'http://birdnote.s3.amazonaws.com/Birdnote/2011/07-Jul-2011/110709-Marbled-Murrelet.mp3'
		}
	];
});
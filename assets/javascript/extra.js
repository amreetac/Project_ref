$( document ).ready(function() {  

		var userID = "";


	function displayPicture(){
		var p = $(this).attr('');
		var queryURL = "https://api.flickr.com/services/rest/?method=" + p + "flickr.people.getPhotosOf&api_key=1f96d6cb44a1b19ff6922f9d914f7875&user_id=144373988%40N08&per_page=2&format=json&nojsoncallback=1&auth_token=72157669881891006-20842eea97803005&api_sig=9783f314890346c3bf5e8d6b29202b51";

		

	$('#submit').on('click', function(){
		

		$.ajax({url: "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=ec5ced9cee7053f8b020c15d45186abd&user_id="+id+"&format=json&nojsoncallback=1",
					method: "GET"
			}).then(

			
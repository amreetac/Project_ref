var flowerPower = function()
{




	/* NOTE:
	 * Good choice on wrapping up the flow functions within a class.
	 * However, methods within classes need to be defined like this
	 this.theFunction = function() {
	
	 }

	 * not this:
	 function theFunction(){
	
	 } 

	 Great work so far
	 -Steve, RCB */




	/*$(".CanBeDragged").draggable({ revert: 'invalid'});

  	//$(".CanDropIn").droppable({accept: '.CanBeDragged' });


  	  	/*$("#origin").droppable({ accept: ".draggable", drop: function(event, ui) {
                    console.log("drop");
                 //  $(this).removeClass("border").removeClass("over");
            // var dropped = ui.draggable;
           // var droppedOn = $(this);
            //$(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
    })});*/

	/*$(".CanDropIn").droppable({accept: '.CanBeDragged'
	      drop: function(event, ui) {
	        alert(this.id);
	      }
	 }); */  


  	/*function handleDropEvent( event, ui ) {
	  var draggable = ui.draggable;
	  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
	}*/

	this.identifyFlower = function(flowerName){


	}

	this.getFlkrPhotosByUserId = function(userId){
		id = userId || "143381569@N02";
		console.log(id);
		$.ajax({url: "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=ec5ced9cee7053f8b020c15d45186abd&user_id="+id+"&format=json&nojsoncallback=1",
					method: "GET"
			}).then(
		    function successCallback(response) {
		    	var imgUrl;
		    	var urlArray = [];
					for(var i = 0; i < response.photos.photo.length; i++){
					imgUrl = 'https://c5.staticflickr.com/'+response.photos.photo[i].farm +
					 "/" + +response.photos.photo[i].server + "/" + response.photos.photo[i].id +
					  "_" +response.photos.photo[i].secret + "_z.jpg";
					  urlArray.push(imgUrl);
					}
					$('#image-results').empty();
					for (var i = 0; i < urlArray.length; i++) {
						// creating the parent div
						var div = $("<div class='col-xs-6 col-md-3'>").addClass("image");
						// a tag
						var atag = $("<a>").addClass("thumbnail")
								   			.attr('href', "#");
						// img tag
						var img = $('<img>').attr('src', urlArray[i]);

						// append img to atag
						atag.append(img);
						// append atag (with the image) to the div 
						div.append(atag);
						// append our div to the physical site
						$('#image-results').append(div);
					}
				}, function errorCallback(err) {
		        console.log(err);
		    }, function() {
		        //progress update do something
		    });

	}


	// function getFlkrPhotosByPhrase(phrase){

	// }


	// var sendChat=function(){


	// 					$.ajax({url: "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=ec5ced9cee7053f8b020c15d45186abd&user_id=143381569@N02&format=json&nojsoncallback=1",
	// 							method: "GET"
	// 					}).then(
	// 				    function(response) {
	// 				    	console.log(response);
	// 				    	var id = response.photos.photo[5].id;
	// 						  $.ajax({url: "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ec5ced9cee7053f8b020c15d45186abd&photo_id="+id+"&per_page=3&format=json&nojsoncallback=1",
	// 							method: "GET"
	// 							}).then(
	// 						    function(response) {
	// 						    	console.log(response);
	// 						    			var url = response.sizes.size[5].source;
	// 						    		 	$.ajax({url: "http://garden.vsapi01.com/api-search/by-url?url="+url+"&n-results=20&image-origin=web&user-id=dc541307-6bd0-fe2b-16f1-64a61f01049f&apiid=justvisual-demo-id&apikey=justvisul-demo-key",
	// 										method: "GET"
	// 										}).then(
	// 									    function(response) {
	// 									    	console.log(response);
	// 									    }, function(response) {
	// 									        console.log(response);
	// 									    }, function() {
	// 									        //progress update do something
	// 									    });
	// 						    }, function(response) {
	// 						        console.log(response);
	// 						    }, function() {
	// 						        //progress update do something
	// 						    });

	// 				    }, function(response) {
	// 				        console.log(response);
	// 				    }, function() {
	// 				        //progress update do something
	// 				    });


						
	// 		    		$.ajax({url: "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=max&explaintext&format=jsonfm&titles=Dahlia&format=json&prop=extracts&callback=?",
	// 					method: "GET",
	// 					dataType: "json"
	// 					}).then(
	// 				    function(response) {
	// 				    	console.log(response);
	// 				    	var firstChild;
	// 				    	var unknownName;
	// 				    	var cultivationText;

	// 				    	var revisionsParentNode;
	// 				    	if(response === undefined || response === null){

	// 				    	}
	// 				    	if(response.query === undefined || response.query === null){

	// 				    	}
 // 							if(response.query.pages === undefined || response.query.pages === null){

	// 				    	}
	// 						var firstChild = response.query.pages;
	// 						if(firstChild === undefined || firstChild === null){

	// 						}
	// 						var keys = Object.keys(firstChild);
	// 						var wikiText = "";
	// 						if (keys === undefined || keys === null || keys.length < 1){
							   	
	// 						}
	// 						unKnownName = keys[0]; 
	// 						revisionsParentNode = firstChild[unKnownName];
	// 						if(revisionsParentNode === undefined || revisionsParentNode === null){
								
	// 						}
	// 						if(revisionsParentNode.revisions === undefined || revisionsParentNode.revisions === null || revisionsParentNode.revisions.length < 1){
								
	// 						}
	// 						wikiText = revisionsParentNode.revisions[0];

	// 				    	//http://garden.vsapi01.com/api-search/by-url?url=http%3A%2F%2Fdemo.justvisual.com%2Fimg%2Fgallery%2FImageGarden2.jpg&n-results=20&image-origin=web&user-id=dc541307-6bd0-fe2b-16f1-64a61f01049f&apiid=justvisual-demo-id&apikey=justvisul-demo-key
	// 				    }, function(response) {
	// 				        console.log(response);
	// 				    }, function() {
	// 				        //progress update do something
	// 				    });

	// 		/*var fData = new FormData();
	// 		fData.append("myInfo", JSON.stringify({ firstName: "Bilal", lastName: "Haidar" }));
			 
	// 		 $.ajax({
	// 		       type: "POST",
	// 		       data: fData,
	// 		       url: "/DataService.ashx",
	// 		       processData: false,
	// 		       contentType: false,
	// 		       cache: false,
	// 		       dataType: "json",
	// 		 });

	// 		 $.ajax({url: "https://api.clarifai.com/v1/tag/?url=https://samples.clarifai.com/metro-north.jpg", method: "POST",

	// 		}).then(
	// 	    function(response) {
	// 	    	console.log(response);
	// 	    	theResponse = response;
	// 	      	var i = 0;
	// 	      	i++;
	// 	    }, function(response) {
	// 	        console.log(response);
	// 	    }, function() {
	// 	        //progress update do something
	// 	    });*/

	// 	   /*var i = o;
	// 	   i++;

	// 	    $.ajax({url: " http://it.wikipedia.org/w/api.php?action=query&list=search&srsearch=Passion Flower&format=json&srprop=snippet", method: "GET"
	// 		}).then(
	// 	    function(response) {
	// 	    	console.log(response);
	// 	    	theResponse = response;
	// 	      	var i = 0;
	// 	      	i++;
	// 	    }, function(response) {
	// 	        console.log(response);
	// 	    }, function() {
	// 	        //progress update do something
	// 	    });*/

	// 	    //$.ajax({url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ec5ced9cee7053f8b020c15d45186abd&tags=flower&per_page=1&format=json", method: "POST"


	// 	 /* $.ajax({url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ec5ced9cee7053f8b020c15d45186abd&tags=flower&per_page=3&format=json&nojsoncallback=1",
	// 			method: "GET"
	// 	}).then(
	//     function(response) {
	//     	console.log(response);
	//     	var id = response.photos.photo[0].id;
	// 		  $.ajax({url: "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ec5ced9cee7053f8b020c15d45186abd&photo_id="+id+"&per_page=3&format=json&nojsoncallback=1",
	// 			method: "GET"
	// 			}).then(
	// 		    function(response) {
	// 		    	console.log(response);
	// 		    	var url = response.sizes.size[5].source;
			    	
			    	
	// 		    }, function(response) {
	// 		        console.log(response);
	// 		    }, function() {
	// 		        //progress update do something
	// 		    });

	//     }, function(response) {
	//         console.log(response);
	//     }, function() {
	//         //progress update do something
	//     });*/

	// }
}

fp = new flowerPower;

$(document).ready(function(){	
	fp.getFlkrPhotosByUserId();
})

$(document).on('click', "#submit", function(){
	var userId = $('#exampleInputAmount').val().trim();
	fp.getFlkrPhotosByUserId(userId);
	// stop refresh
	return false;
});





$(document).ready(function(){
		$.ajax({
		type:'GET', 
		url:'http://swapi.co/api/people/',
		// use .done and .fail
	})

		.done(function(data){
			console.log(data);
	})
	.fail(function(){
		alert("server down");

	})



	console.log("woah");

});

//kenn says download postman,
//	error:function(){
//			alert("error loading data..");	
//	success: function(data){
//			console.log(data.results[0].name);
	
		
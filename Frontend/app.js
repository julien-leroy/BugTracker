$(document).ready(function(){
	$("#getUser").click(function(){
		var email = $( "#username-email" ).val();
	     
	    $.ajax({
	       url : '/getUsers',
	       type : 'GET',
		   data : 'email=' + email,
	       dataType : 'html',
	       success : function(json, statut){
	           $("#userGames").text(json);
	       },

	       error : function(resultat, statut, erreur){
	       		$("#userGames").text('Sorry, an error just happened...');
	       },

	       complete : function(json, statut){
	       		console.log(json);
	       }

	    });
	   
	});
});

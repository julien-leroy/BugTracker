$(document).ready(function(){
	$("#getUser").click(function(){
		var user = $( "#userName" ).val();
	     
	    $.ajax({
	       url : '/getUsers',
	       type : 'GET',
		   data : 'email=' + user,
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

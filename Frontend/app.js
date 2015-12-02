var steamAPIUrl = "http://api.steampowered.com/"
var steamAPIKey = 'FB4467B73B9012463F2594FEBABCAF47';
var format = 'json';

$(document).ready(function(){
	$("#getUser").click(function(){
		var userName = $( "#userName" ).val();
	     
	    $.ajax({
	       url : steamAPIUrl + 'IPlayerService/GetOwnedGames/v0001/',
	       type : 'GET',
	       data : 'key=' + steamAPIKey + '&steamid=' + userName + '&format=' + format,
	       dataType : 'html',
	       success : function(code_html, statut){
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

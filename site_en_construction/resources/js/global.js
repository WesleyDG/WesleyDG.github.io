function jsonToHtml(json){
	let regexp = /\{(.*?)\}/ig; //capture les elements entre accolades (les groupes entre parentheses ne sont pris en compte que par la fonction exec et non la fonction match, les accolades seront donc retournées)
	let matches = $(".container").html().match(regexp); //tableau de tous les elements entre {} trouvés dans le html de div.container (y compris dans les balises donc, necessaire pour les a href)

	matches.forEach(function(element){
	  let var_string = element.slice(1,-1); //on supprime les accolades, soit le premier et dernier caractere de chaque cellule du tableau puis on remplace le contenu du html
	  str = eval("json."+var_string); //on transforme le nom de chemin en objet json (exemple: json.contact.adresse.rue)
	  $(".container").html($(".container").html().replace("{"+var_string+"}", str)); //on remplace la variable entre {} par sa valeur json      
	});
  }
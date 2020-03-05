// Nombre de lignes et de colonnes dans notre table de jeu
var rows=10;
var cols=10;

//taille d'une case en pixels
var squareSize=50;

// récupérer le container
var BoardContainer=document.getElementById("board");

// Création de notre table de jeu dans le html
for (var i=0;i<cols;i++) {
	for (var j=0;j<rows;j++) {
		
		// on crée des div dans notre fichier html
		var carre=document.createElement("div");
    
		BoardContainer.appendChild(carre);
    
    
    // pour chaque div qu'on crée, on lui attribut un id spécifique, pour éviter les redondance on utilise une notation basé sur son numéro de ligne et de colonne (ex: c00 pour le prémier carré en haut à gauche)
		carre.id='c'+j+i;			
		
    //on défini pour chaque carré ses coordonnées en pixel d'après sa postition dans la matrice et on les envoie au css
		var haut = j * squareSize;
		var gauche = i * squareSize;			
		carre.style.top = haut + 'px';
		carre.style.left = gauche + 'px';						
	}
}

// cette variable sera utile pour savoir quand un joueur aura gagner (ex: si on prend 5 bateaux de taille 3cases, la partie sera gagnée quand cette variable sera égale à 15)
var nombreDeCoups = 0;

//création de la matrice contenant nos bateaux
// 0 = pas de bateau
// 1 = bateau
// 2 = une fois qu'on touche une parti d'un bateau, le 1 se transforme en 2
// 3 = tir raté

// POUR L'INSTANT JE LE FAIS MANUELLEMENT MAIS VA FALLOIR FAIRE UNE FONCTION POUR LES PLACER ALEATOIREMENT PLUS TARD!!!!

var table = [
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,1,1,1,0,0],
				[1,0,0,0,0,1,0,0,0,0],
				[1,0,0,0,0,1,0,0,0,0],
				[0,0,0,0,0,1,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,1,1,1,1,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,1,0,0,0,0,1,0,0],
				[0,0,0,0,0,0,0,1,0,0]
				]


//On défini cet event listener sur Onclick pour lancer la fonction tirer dès qu'on click sur notre table de jeu
BoardContainer.addEventListener("click", tirer, false);

// fonction tirer, e et notre event et cette fonction sera appelée à chaque clique 
function tirer(e) {
  
    // sans ce if il n'ya pas du tout d'affichage, je n'ai pas compris pourquoi et j'ai trouvé ça sur stackoverflow maintenant ça marche mais je sais pas si il rique de poser problème par la suite
	if (e.target !== e.currentTarget) {
    
    //on extrait le numéro de ligne et de colonne depuis l'id du div du carré sur lequel on a cliqué
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
				
		// si le tir est raté on change la valeur de la case à 3 et on grise cette case pour qu'il ne puisse plus cliquer dessus
		if (table[row][col] == 0) {
			e.target.style.background = 'lightgrey';
			table[row][col] = 3;
			
		// si le tir fait mouche on change la valeur de la case à 2 et on la colori pour montrer qu'il y avait bien une partie d'un bateau à cette case
		//si le tir touche alors on incrémente le nombre de coup
    } else if (table[row][col] == 1) {
			e.target.style.background = 'skyblue';
			table[row][col] = 2;
			nombreDeCoups++;
      
      
      //va falloir changer ça par un affichage au milieu de la grille (un truc plus joli quoi)
			if (nombreDeCoups == 18) {
				alert("GG WP");
			}
		} 	
  }
  
  // si jamai on aura un problème par la suite on pourra essayé de stoper la propagation de cet évènement avec e.stopPropagation();
}

// The quiz object

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById('QCM').style.visibility='hidden';
document.getElementById('libre').style.visibility='hidden';
document.getElementById('valider').style.visibility='hidden';
document.getElementById('next').style.visibility='hidden';
document.getElementById('bonnes_reponses').style.visibility='hidden';
document.getElementById("confirmation_connexion").style.visibility="hidden"

let audio;// Création de la balise pour jouer les musiqques lors du blind test
let music_is_playing= false;// création de la variable utilisée pour savoir si une musique est en train d'être jouée
let texte_input; // variable utilisée pour récupérer le titre des medias et le mettre dans les questions posées
let bonnes_rep = 0; // compte le nombre de connes réponses
let nb_question = 1; // compte le nombre de questions posées 
let num_playlist = entierAleatoire(0,list_of_media.length-1);// choisi le media sur lequel la question va etre posée
let mauvaise_rep = entierAleatoire(0,list_of_media.length-1);// choisi le mdedia pour avoir la mauvaise réponse
while(mauvaise_rep==num_playlist || list_of_media[mauvaise_rep][4]==list_of_media[num_playlist][4])//verifie que ce ne sont pas les memes médias, ou que les medias n'ont pas le meme artiste(si il n'y a que des medias avec le meme artiste le code ne marche pas)
{
	mauvaise_rep = entierAleatoire(0,list_of_media.length-1);
}
let mauvaise_annee=list_of_media[mauvaise_rep][5];//on crée la variable mauvaise année au cas ou tous les medias datent de la meme année et que l'on doivent changer l'année
let bonne_option = entierAleatoire(1,2);// permet de déterminer la place de la bonne option 
let type_question = entierAleatoire(1,2);//permet de déterminer le type de question que l'on va poser si le media est de type "song"
let type_media = list_of_media[num_playlist][0]; //on prend le type de media pour determiner quelles question on va poser 
document.getElementById("commencer").addEventListener('click', () => {//on commence le quizz quand on appuie sur le bouton "commencer le quizz"
	document.getElementById('valider').style.visibility='initial';//on affiche le bouton "valider"
	document.getElementById('next').style.visibility='initial';
	document.getElementById('commencer').style.visibility='hidden';
	if (type_media == "video")//on pose la question relative à la vidéo(film)
	{
		if (list_of_media[mauvaise_rep][5] == list_of_media[num_playlist][5])// si les deux réponses sont les memes
		{
			mauvaise_annee=entierAleatoire(list_of_media[num_playlist][5]-3,list_of_media[num_playlist][5]-1);
		}
		document.getElementById("question").innerText="donnez l'annee de sortie de la video : " + list_of_media[num_playlist][1]; //on affiche la bonne question 
		if(bonne_option==1)//choix pour placer les checkboxs
		{
			document.getElementById("option1").innerText=list_of_media[num_playlist][5];//on affiche les bonnes checkboxs
			document.getElementById("option2").innerText=mauvaise_annee;
			document.getElementById("checkbox1").checked =false;// on remet les check box à 0
			document.getElementById("checkbox2").checked =false;
		}
		else
		{
			document.getElementById("option1").innerText=mauvaise_annee;
			document.getElementById("option2").innerText=list_of_media[num_playlist][5];
			document.getElementById("checkbox1").checked =false;
			document.getElementById("checkbox2").checked =false;
		}
		document.getElementById('QCM').style.visibility='initial';//on affiche les bons éléments
		document.getElementById('libre').style.visibility='hidden';
	}
	else
	{
		if (type_question == 1)
		{
			document.getElementById("question").innerText="donnez l'artiste de la chanson : " +  list_of_media[num_playlist][1];
			if (bonne_option==1)
			{
				document.getElementById("option1").innerText=list_of_media[num_playlist][4];
				document.getElementById("option2").innerText=list_of_media[mauvaise_rep][4];
				document.getElementById("checkbox1").checked =false;
				document.getElementById("checkbox2").checked =false;

			}
			else
			{
				document.getElementById("option1").innerText=list_of_media[mauvaise_rep][4];
				document.getElementById("option2").innerText=list_of_media[num_playlist][4];
				document.getElementById("checkbox1").checked =false;
				document.getElementById("checkbox2").checked =false;
			}
			document.getElementById('QCM').style.visibility='initial';
			document.getElementById('libre').style.visibility='hidden';

		}
		else
		{
			let audio =document.createElement('audio');
			audio.setAttribute("src",list_of_media[num_playlist][6]);
			audio.play();
			music_is_playing = true;
			document.getElementById("titre_input").innerText='';
			document.getElementById("titre").value="rentrez le titre de la chanson" ;
			document.getElementById('libre').style.visibility='initial';
			document.getElementById('QCM').style.visibility='hidden';
		}
	}
});
document.getElementById("next").addEventListener('click', () => {
	//cette fonction est censée arréter la musique quand on clique sur le bouton envoyer, si une musique à été joué, cependant l'id attribué à la balise n'est plus reconnue, la commande ne marche donc pas
	/*if(music_is_playing)
	{
		document.getElementById("audio").innerHTML='';
		music_is_playing = false;
	}*/
	//on regénère toutes les données aléatoires
	num_playlist = entierAleatoire(0,list_of_media.length-1);
	mauvaise_rep = entierAleatoire(0,list_of_media.length-1);
	while(mauvaise_rep==num_playlist)
	{
		mauvaise_rep = entierAleatoire(0,list_of_media.length-1);
	}
	lbonne_option = entierAleatoire(1,2);
	type_question = entierAleatoire(1,2);
	type_media = list_of_media[num_playlist][0];
	nb_question+=1;
	if (nb_question<list_of_media.length+1)//on vérifie que le nombre de question ne dépasse pas la taille de la playlist( je n'ai pas eu le temps de faire en sorte )
	{
		if (type_media == "video")
		{
			if (list_of_media[mauvaise_rep][5] == list_of_media[num_playlist][5])
			{
				mauvaise_annee=entierAleatoire(list_of_media[num_playlist][5]-3,list_of_media[num_playlist][5]-1);
			}
			document.getElementById("question").innerText="donnez l'annee de sortie de la vidéo : " + list_of_media[num_playlist][1]; 
			if (bonne_option==1)
			{
				document.getElementById("option1").innerText=list_of_media[num_playlist][5];
				document.getElementById("option2").innerText=mauvaise_annee;
				document.getElementById("checkbox1").checked =false;
				document.getElementById("checkbox2").checked =false;
			}
			else
			{
				document.getElementById("option1").innerText=mauvaise_annee;
				document.getElementById("option2").innerText=list_of_media[num_playlist][5];
				document.getElementById("checkbox1").checked =false;
				document.getElementById("checkbox2").checked =false;
			}
			document.getElementById('QCM').style.visibility='initial';
			document.getElementById('libre').style.visibility='hidden';
		}
		else
		{
			if (type_question == 1)
			{
				document.getElementById("question").innerText="donnez l'artiste de la chanson : " + list_of_media[num_playlist][1];
				if (bonne_option==1)
				{
					document.getElementById("option1").innerText=list_of_media[num_playlist][4];
					document.getElementById("option2").innerText=list_of_media[mauvaise_rep][4];
					document.getElementById("checkbox1").checked =false;
					document.getElementById("checkbox2").checked =false;
				}
				else
				{
					document.getElementById("option1").innerText=list_of_media[mauvaise_rep][4];
					document.getElementById("option2").innerText=list_of_media[num_playlist][4];
					document.getElementById("checkbox1").checked =false;
					document.getElementById("checkbox2").checked =false;
				}
				document.getElementById('QCM').style.visibility='initial';
				document.getElementById('libre').style.visibility='hidden';
			}
			else
			{
				audio =document.createElement('audio'); // on créé une balise audio pour jouer la musique
				audio.id = "audio"
				audio.setAttribute("src",list_of_media[num_playlist][6]);
				audio.play();
				music_is_playing = true;
				document.getElementById("titre").innerText="rentrez le titre de la chanson";
				document.getElementById('libre').style.visibility='initial';
				document.getElementById('QCM').style.visibility='hidden';
				document.getElementById("titre_input").value='';
			}
		}
	}
	else 
	{
		document.getElementById('bonnes_reponses').innerText="votre nombre de bonne réponses est : " + bonnes_rep;
		document.getElementById('libre').style.visibility='hidden';//on cache les questions
		document.getElementById('QCM').style.visibility='hidden';
		document.getElementById('next').style.visibility='hidden';
		document.getElementById('valider').style.visibility='hidden';
		document.getElementById('bonnes_reponses').style.visibility='initial';//on réaffiche le nombre de bonnes réponses
	}
});


//pour ne pas qu'on puisse cocher les deux cases à la fois
document.getElementById("checkbox2").addEventListener('click', () => 
{
	document.getElementById("checkbox1").checked=false;
});

document.getElementById("checkbox1").addEventListener('click', () => 
{
	document.getElementById("checkbox2").checked=false;
});


document.getElementById("formi8").addEventListener('click', () => 
{
	let connecte=true;
	prenom=document.getElementById("Name").value + ".";
	document.getElementById("confirmation_connexion").innerText="vous êtes bien inscrit et connecté madame/monsieur " + prenom; 
	document.getElementById("myfs1").style.visibility="hidden";
	document.getElementById("formi8").style.visibility="hidden";
	document.getElementById("confirmation_connexion").style.visibility="initial";
	document.getElementById('Surname').value='';
	document.getElementById('Name').value='';
	document.getElementById('email').value='';
});

document.getElementById("valider").addEventListener('click', () => 
{
	if (type_media == "video" && bonne_option==1)
	{
		if(document.getElementById("checkbox1").checked)//on actualise le score
		{
			bonnes_rep+=1;
			document.getElementById('bonnes_reponses').innerText="pour_l'incrémentation"+bonnes_rep;
		}				
	}
	else if (type_media == "video" && bonne_option==2)
	{
		if(document.getElementById("checkbox2").checked)//on actualise le score
		{
			bonnes_rep+=1;
			document.getElementById('bonnes_reponses').innerText="pour_l'incrémentation"+bonnes_rep;
		}				
	}
	else if (type_media == "song" && bonne_option==1 && type_question==1)
	{
		if(document.getElementById("checkbox1").checked)//on actualise le score
		{
			bonnes_rep+=1;
			document.getElementById('bonnes_reponses').innerText="pour_l'incrémentation"+bonnes_rep;
		}				
	}
	else if (type_media == "song" && bonne_option==2 && type_question==1)
	{
		if(document.getElementById("checkbox2").checked)//on actualise le score
		{
			bonnes_rep+=1;
			document.getElementById('bonnes_reponses').innerText="pour_l'incrémentation"+bonnes_rep;
		}				
		
	}
	if (type_media == "song" && type_question == 2)
	{
		if(document.getElementById("titre_input").value.toString() == list_of_media[num_playlist][1] )
		{
			bonnes_rep+=1;
		}
	}
});
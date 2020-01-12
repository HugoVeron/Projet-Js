Projet :

--> Partie Playlist
Une page .html et une page .css qui gère le contenu visuel de l'app
Les script .js song playlist et app gère la playlist

song.js : 	Deux objet Movie et Song qui héritent de l'objet Media.
			Movie et Song ont une méthode toHTML qui génère le HTML de notre playlist
			Song a 4 méthodes, playm qui va lancer la lecture du média, pausem qui va l'arreter, resetmediareading qui va
			remettre le lecteur au début et getTitle afin d'obtenir le titre

playlist.js :	Un objet Playlist avec 12 méthodes :
				add qui va appeler la méthode toHTML de Movie ou Song afin de générer ces objets
				playmedia qui va jouer le media
				nextmedia qui va passer l'index de media au suivant
				prevmedia qui va passer l'index au media précédent
				pausemedia qui va mettre en pause le media
				resetmedia qui va remettre le lecteur à 0
				stopmedia qui stop la lecture <-- fin de la playlist
				exitmedia qui stop la lecture et on se met à la fin de la playlist
				randomloopmedia qui met l'index du media aléatoirement
				replaymedia qui rejoue la playlist du début
				getTitle qui récupère le titre
				getNowPlayingIndex qui récupère l'index du media

app.js :	Création de notre playlist par un Array de Array
			Il y a 14 méthodes dont 6 pour gérer les like de la playlist contenant 6 media
			playplaylist qui va jouer la lecture de la playlist automatiquement
			pauseplaylist qui met en pause la lecture de la playlist
			nextplaylist qui passe au prochain media de la playlist
			prevplaylist qui passe au media precedent de la playlist
			stopplaylist qui stop la playlist --> on est arrivé à la fin
			exitplaylist qui stop la playlist en cours de lecture 
			replayplaylist qui rejoue la playlist
			randomloopplaylist qui joue la playlist de maniere aléatoire

--> Partie Quizz
quizz.js :  on définit notre fonction pour générer l'aléatoire
			on définit toutes les variables dont on va avoir besoin dans notre quizz, et on affiche les bons éléments
			le bouton commencer et là pour faire intéragir l'utilisateur avec la page au cas ou la première question est une musique car les navigateurs interdisent la lecture automatique lorsque l'utilisateur n'a jamais intéragit avec la page
			on gère les premières question lorsque l'utilisateur clique sur le bouton commencer
			on gère les question suivant lorsque l'utilisateur clique sur le bouton prochaine question
			on fait en sorte que seulement une seule checkbox puisse etre cochée en même temps
			on gère la validation des réponses quand l'utilisateur clique sur  valider la réponse

			il faut cliquer sur le bouton valider la reponse lorsqu'on a rempli sa réponse, si l'on clique plusieurs fois on aura plusieurs fois les points


La partie inscription aurait pu se faire en ajax avec le traitement de l'inscription via une page php qui peut mettre des varibles de $_SESSION afin de toujours afficher le message lorsqu'on est connecté sur l'app --> JS peut ensuite récupéré les informations et les affichers mais on peut le faire en HTML x PHP, de plus avec un form il y a déjà du preg match regex sur le type mail
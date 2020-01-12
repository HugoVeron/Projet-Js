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

La partie inscription aurait pu se faire en ajax avec le traitement de l'inscription via une page php qui peut mettre des varibles de $_SESSION afin de toujours afficher le message lorsqu'on est connecté sur l'app --> JS peut ensuite récupéré les informations et les affichers mais on peut le faire en HTML x PHP, de plus avec un form il y a déjà du preg match regex sur le type mail
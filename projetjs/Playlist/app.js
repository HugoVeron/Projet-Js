// Start the application

let prenom ;



// Déclaration de mes médias
let media_1 = ["song","Un peu de haine","0:16","false","PLK","2019","../media/plk-un-peu-de-haine-clip-officiel.mp3"];
let media_2 = ["song","Rien d'spécial","0:16","false","Népal","2019","../media/nepal-rien-dspecial-laxvision.mp3"];
let media_3 = ["song","Summer The Four Seasons","0:16","false","Vivaldi","1723","../media/vivaldi-summer-the-four-seasons.mp3"];
let media_4 = ["song","Mach den hub hub hub","0:16","false","Tobee","2017","../media/tobee-helikopter-117-mach-den-hub-hub-hub-offizielles-video.mp3"];
let media_5 = ["song","Californication","0:17","false","Red Hot Chili Peppers","1999","../media/red-hot-chili-peppers-californication-official-music-video.mp3"];
let media_6 = ["video","Abordable","0:10","false","Sardoche","2019","../media/Sardoche_react.mp4"]

// Déclaration de ma liste de média avec des push
let list_of_media = [];

list_of_media.push(media_1,media_2,media_3,media_4,media_5,media_6);
let nowPlayingMedia = 0; // à 0 par défaut

// Génération de mon objet playlist
let my_playlist = new Playlist(list_of_media,nowPlayingMedia);
// Génération du HTML à l'aide de la fonction add
my_playlist.add();

// Catch du nbr de media dans la liste
let nbr_media=list_of_media.length;

// Fonction pour lire la playlist avec si appelle lecture automatique
function playplaylist() { 
	my_playlist.playmedia();
	let media_index = list_of_media[my_playlist.getNowPlayingIndex()];
	let media = document.getElementById(media_index[1]);
	// Si on est au dernier media on stop la playlist
	if (media_index[1]==list_of_media[nbr_media-1][1]) {
		media.onended = function() {
			stopplaylist();
		}
	}
	// sinon on passe au suivant
	else {
		media.onended = function() {
		nextplaylist();
		};
		let btn_play = document.getElementById("btn-play").style.background = "white";
		let btn_prev = document.getElementById("btn-previous").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_next = document.getElementById("btn-next").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_pause = document.getElementById("btn-pause").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_replay = document.getElementById("btn-replay").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_stop = document.getElementById("btn-stop").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_random = document.getElementById("btn-random").style.background = "rgba(0, 0, 0, 0.3)";
	}
}
	
// Fonction pour mettre en pause la lecture de la playlist
function pauseplaylist() {
	my_playlist.pausemedia();
	let btn_play = document.getElementById("btn-play").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_prev = document.getElementById("btn-previous").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_next = document.getElementById("btn-next").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_pause = document.getElementById("btn-pause").style.background = "white";
	let btn_replay = document.getElementById("btn-replay").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_stop = document.getElementById("btn-stop").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_random = document.getElementById("btn-random").style.background = "rgba(0, 0, 0, 0.3)";
}

// Fonction pour passer au prochain media dans la playlist
function nextplaylist() {
	let media_index = list_of_media[my_playlist.getNowPlayingIndex()];
	let media = document.getElementById(media_index[1]);
	// Si on est au dernier media on stop la playlist
	if (media_index[1]==list_of_media[nbr_media-1][1]) {
		my_playlist.pausemedia();
			stopplaylist();
	}
	// Sinon on passe au suivant
	else {
		my_playlist.pausemedia();
		my_playlist.resetmedia();
		my_playlist.nextmedia();
		playplaylist();
		let btn_play = document.getElementById("btn-play").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_prev = document.getElementById("btn-previous").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_next = document.getElementById("btn-next").style.background = "white";
		let btn_pause = document.getElementById("btn-pause").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_replay = document.getElementById("btn-replay").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_stop = document.getElementById("btn-stop").style.background = "rgba(0, 0, 0, 0.3)";
		let btn_random = document.getElementById("btn-random").style.background = "rgba(0, 0, 0, 0.3)";
	}
}

// Fonction pour revenir au media precedent
function prevplaylist() {
	my_playlist.pausemedia();
	my_playlist.resetmedia();
	my_playlist.prevmedia();
	playplaylist();
	let btn_play = document.getElementById("btn-play").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_prev = document.getElementById("btn-previous").style.background = "white";
	let btn_next = document.getElementById("btn-next").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_pause = document.getElementById("btn-pause").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_replay = document.getElementById("btn-replay").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_stop = document.getElementById("btn-stop").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_random = document.getElementById("btn-random").style.background = "rgba(0, 0, 0, 0.3)";
}

// Fonction pour arreter la lecture totale de la playlist
function stopplaylist() {
	my_playlist.stopmedia();
	let btn_play = document.getElementById("btn-play").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_prev = document.getElementById("btn-previous").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_next = document.getElementById("btn-next").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_pause = document.getElementById("btn-pause").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_replay = document.getElementById("btn-replay").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_stop = document.getElementById("btn-stop").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_random = document.getElementById("btn-random").style.background = "rgba(0, 0, 0, 0.3)";
}

// Fonction similaire à exit pour stopper la playlist
function exitplaylist() {
	my_playlist.pausemedia();
	my_playlist.resetmedia();
	let index_playlist = my_playlist.getNowPlayingIndex();
	while (index_playlist<list_of_media.length) {
		nextplaylist();
		index_playlist++;
	}
	let btn_play = document.getElementById("btn-play").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_prev = document.getElementById("btn-previous").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_next = document.getElementById("btn-next").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_pause = document.getElementById("btn-pause").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_replay = document.getElementById("btn-replay").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_stop = document.getElementById("btn-stop").style.background = "white";
	let btn_random = document.getElementById("btn-random").style.background = "rgba(0, 0, 0, 0.3)";
}

// Fonction pour rejouer au début la playlist
function replayplaylist() {
	my_playlist.pausemedia();
	my_playlist.resetmedia();
	my_playlist.replaymedia();
	playplaylist();
	let btn_play = document.getElementById("btn-play").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_prev = document.getElementById("btn-previous").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_next = document.getElementById("btn-next").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_pause = document.getElementById("btn-pause").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_replay = document.getElementById("btn-replay").style.background = "white";
	let btn_stop = document.getElementById("btn-stop").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_random = document.getElementById("btn-random").style.background = "rgba(0, 0, 0, 0.3)";
}

// Fonction pour jouer en boucle la playlist aléatoirement
function randomloopplaylist() {
	my_playlist.pausemedia();
	my_playlist.resetmedia();
	my_playlist.stopmedia();
	my_playlist.randomloopmedia();
	my_playlist.playmedia();
	let media_index = list_of_media[my_playlist.getNowPlayingIndex()];
	let media = document.getElementById(media_index[1]);
	// Le faire tout le temps jee prefere passer par un if
	if (true) {
		media.onended = function() {
		randomloopplaylist();
		}
	}
	let btn_play = document.getElementById("btn-play").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_prev = document.getElementById("btn-previous").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_next = document.getElementById("btn-next").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_pause = document.getElementById("btn-pause").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_replay = document.getElementById("btn-replay").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_stop = document.getElementById("btn-stop").style.background = "rgba(0, 0, 0, 0.3)";
	let btn_random = document.getElementById("btn-random").style.background = "white";
}

// Fonctions pour générer le like ou unlike en fonction de chaque artiste
function likeSardoche() {
	let button_like = document.getElementById("Sardochelike");
	let src = button_like.getAttribute("src");
	if (my_playlist.getTitle()=="Abordable") {
		if (src=="../image/like.png") {
			button_like.setAttribute("src","../image/unlike.png");
		}
		else {
			button_like.setAttribute("src","../image/like.png");
		}
	}
}

function likePLK() {
	let button_like = document.getElementById("PLKlike");
	let src = button_like.getAttribute("src");
	if (my_playlist.getTitle()=="Un peu de haine") {
		if (src=="../image/like.png") {
			button_like.setAttribute("src","../image/unlike.png");
		}
		else {
			button_like.setAttribute("src","../image/like.png");
		}
	}
}

function likeRHCP() {
	let  button_like = document.getElementById("Red Hot Chili Pepperslike");
	let src = button_like.getAttribute("src");
	if (my_playlist.getTitle()=="Californication") {
		if (src=="../image/like.png") {
			button_like.setAttribute("src","../image/unlike.png");
		}
		else {
			button_like.setAttribute("src","../image/like.png");
		}
	}
}

function likeVivaldi() {
	let button_like = document.getElementById("Vivaldilike");
	let src = button_like.getAttribute("src");
	if (my_playlist.getTitle()=="Summer The Four Seasons") {
		if (src=="../image/like.png") {
			button_like.setAttribute("src","../image/unlike.png");
		}
		else {
			button_like.setAttribute("src","../image/like.png");
		}
	}
}

function likeTobee() {
	let button_like = document.getElementById("Tobeelike");
	let src = button_like.getAttribute("src");
	if (my_playlist.getTitle()=="Mach den hub hub hub") {
		if (src=="../image/like.png") {
			button_like.setAttribute("src","../image/unlike.png");
		}
		else {
			button_like.setAttribute("src","../image/like.png");
		}
	}
}

function likeNepal() {
	let button_like = document.getElementById("Népallike");
	let src = button_like.getAttribute("src");
	if (my_playlist.getTitle()=="Rien d'spécial") {
		if (src=="../image/like.png") {
			button_like.setAttribute("src","../image/unlike.png");
		}
		else {
			button_like.setAttribute("src","../image/like.png");
		}
	}
}

document.getElementById("formi8").addEventListener('click', () => 
{
	connecte=true;
	prenom=document.getElementById("Name").value + ".";
	document.getElementById("confirmation_connexion").innerText="Vous êtes bien inscrit et connecté " + prenom + "."; 
	document.getElementById("myfs1").style.display="none";
	document.getElementById("formi8").style.display="none";
	document.getElementById("confirmation_connexion").style.display="initial";
	document.getElementById('Surname').value='';
	document.getElementById('Name').value='';
	document.getElementById('email').value='';
});

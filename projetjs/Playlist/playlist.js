// The playlist object

function Playlist(media,nowPlayingIndex)
{

	this.media = media;
	this.nowPlayingIndex = nowPlayingIndex;

	this.add = function() // Méthode pour ajouter un media existant à la playlist
	{
		for ( let index = 0; index < media.length; index++) {
			if (media[index][0]=="song") {
				let song_index = new Song(media[index][1],media[index][2],media[index][3],media[index][4],media[index][5],media[index][6]);
				song_index.toHTML();
			}
			else {
				let video_index = new Movie(media[index][1],media[index][2],media[index][3],media[index][4],media[index][5],media[index][6]);
				video_index.toHTML();
			}
		}
	}

	this.playmedia = function() // Méthode pour lire la playlist
	{
		let mediaToPlay = media[nowPlayingIndex];
		if (mediaToPlay[0]=="song") {
			let music = new Song(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
			document.getElementById(mediaToPlay[4].concat("text")).style.background = "#82e2ff";
			music.playm();
		}
		else {
			document.getElementById(mediaToPlay[1]).style.display = "initial";
			document.getElementById(mediaToPlay[5].concat("text")).style.background = "#82e2ff"
			let video = new Movie(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
			video.playm();
		}
	}

	this.nextmedia = function() // Méthode pour passer au prochain media
	{
		if(nowPlayingIndex == (media.length - 1)) // Si on est au bout la playlist --> on revient au début
		{
			nowPlayingIndex = media.length + 1;
		} 
		else // Sinon on avance simplement de 1
		{
			let mediaToPlay = media[nowPlayingIndex];
			if (mediaToPlay[0]=="song") {
				let music = new Song(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
				document.getElementById(mediaToPlay[4].concat("text")).style.background = "#fc1260";
				music.stopm();
			}
			else {
				document.getElementById(mediaToPlay[1]).style.display = "initial";
				document.getElementById(mediaToPlay[5].concat("text")).style.background = "#fc1260";
				let video = new Movie(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
				video.stopm();
			}

		    nowPlayingIndex++;

		    let mediaToPlayNext = media[nowPlayingIndex];
		    if (mediaToPlayNext[0]=="song") {
				let music = new Song(mediaToPlayNext[1],mediaToPlayNext[2],mediaToPlayNext[3],mediaToPlayNext[4],mediaToPlayNext[5],mediaToPlayNext[6]);
				document.getElementById(mediaToPlay[4].concat("text")).style.background = "#82e2ff";
				music.playm();
			}
			else {
				document.getElementById(mediaToPlayNext[1]).style.display = "initial";
				document.getElementById(mediaToPlay[5].concat("text")).style.background = "#82e2ff";
				let video = new Movie(mediaToPlayNext[1],mediaToPlayNext[2],mediaToPlayNext[3],mediaToPlayNext[4],mediaToPlayNext[5],mediaToPlayNext[6]);
				video.playm();
			}
		}
	}

	this.stopmedia = function() // Méthode pour arreter le media
	{
		let mediaToPlay = media[nowPlayingIndex];
		if (mediaToPlay[0]=="song") {
			let music = new Song(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
			document.getElementById(mediaToPlay[4].concat("text")).style.background = "#21758f";
			music.stopm();
		}
		else {
			document.getElementById(mediaToPlay[1]).style.display = "none";
			document.getElementById(mediaToPlay[5].concat("text")).style.background = "#21758f";
			let video = new Movie(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
			video.stopm();
		}
	}
		
}



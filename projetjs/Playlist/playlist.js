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
			document.getElementById(mediaToPlay[4].concat("text")).style.background = "#82e2ff";
			let video = new Movie(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
			video.playm();
		}
	}

	this.nextmedia = function() // Méthode pour passer au prochain media
	{
		if(nowPlayingIndex == (media.length - 1)) // Si on est au bout la playlist --> on revient au début
		{
			nowPlayingIndex = nowPlayingIndex;
		}
		else // Sinon on avance simplement de 1
		{
		    nowPlayingIndex++;
		}
	}

	this.prevmedia = function() // Méthode pour passer au media precedant
	{
		if(nowPlayingIndex == 0) // Si on est au début de la playlist --> on revient à la fin
		{
			nowPlayingIndex = nowPlayingIndex;
		} 
		else // Sinon on recule simplement de 1
		{
		    nowPlayingIndex--;
		}
	}

	this.pausemedia = function() // Méthode pour arreter le media
	{
		let mediaToPlay = media[nowPlayingIndex];
		if (mediaToPlay[0]=="song") {
			let music = new Song(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
			document.getElementById(mediaToPlay[4].concat("text")).style.background = "#21758f";
			music.pausem();
		}
		else {
			document.getElementById(mediaToPlay[4].concat("text")).style.background = "#21758f";
			document.getElementById(mediaToPlay[1]).style.display = "none";
			let video = new Movie(mediaToPlay[1],mediaToPlay[2],mediaToPlay[3],mediaToPlay[4],mediaToPlay[5],mediaToPlay[6]);
			video.pausem();
		}
	}

	this.resetmedia = function()
	{
		let mediaToReset = media[nowPlayingIndex];
		if (mediaToReset[0]=="song") {
			let music = new Song(mediaToReset[1],mediaToReset[2],mediaToReset[3],mediaToReset[4],mediaToReset[5],mediaToReset[6]);
			document.getElementById(mediaToReset[4].concat("text")).style.background = "#fc1260";
			music.resetmediareading();
		}
		else {
			let video = new Movie(mediaToReset[1],mediaToReset[2],mediaToReset[3],mediaToReset[4],mediaToReset[5],mediaToReset[6]);
			document.getElementById(mediaToReset[4].concat("text")).style.background = "#fc1260";
			video.resetmediareading();
		}
	}

	this.stopmedia = function()
	{
		let mediaToStop = media[nowPlayingIndex];
		let video = new Movie(mediaToStop[1],mediaToStop[2],mediaToStop[3],mediaToStop[4],mediaToStop[5],mediaToStop[6]);
		document.getElementById(mediaToStop[4].concat("text")).style.background = "#fc1260";
		document.getElementById(mediaToStop[1]).style.display = "none";
	}

	this.exitmedia = function()
	{
		nowPlayingIndex = media.length - 1;
		let mediaToStop = media[nowPlayingIndex];
		if (mediaToStop[0]=="video") {
			let media = new Movie(mediaToStop[1],mediaToStop[2],mediaToStop[3],mediaToStop[4],mediaToStop[5],mediaToStop[6]);
			document.getElementById(mediaToStop[4].concat("text")).style.background = "#fc1260";
			document.getElementById(mediaToStop[1]).style.display = "none";
		}
		else {
			let media = new Song(mediaToStop[1],mediaToStop[2],mediaToStop[3],mediaToStop[4],mediaToStop[5],mediaToStop[6]);
			document.getElementById(mediaToStop[4].concat("text")).style.background = "#fc1260";
			document.getElementById(mediaToStop[1]).currentTime = 0;
		}
	}

	this.replaymedia = function()
	{
		nowPlayingIndex=0;
	}

	this.getTitle = function()
	{
		let MediaToGetTitle = media[nowPlayingIndex][1];
		return MediaToGetTitle;
	}

	this.getNowPlayingIndex = function()
	{
		return nowPlayingIndex;
	}	
}



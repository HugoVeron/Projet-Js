// Création du constructeur media

function Media(title,duration,isPlaying)
{
	this.title = title;
	this.duration = duration;
	this.isPlaying = isPlaying;

	this.play = function()
	{
		isPlaying = true;
		// Lire le fichier audio ou vidéo
		// Passer isPlaying à True
	}

	this.stop = function()
	{
		isPlaying = false;
		// Stopper le fichier audio ou vidéo
		// Passer isPlaying à False
	}
}

function Song(title,duration,isPlaying,artist,year,path)
{
	Media.call(this,title,duration,isPlaying,path);

	this.title = title;
	this.duration = duration;
	this.artist = artist;
	this.year = year;
	this.path = path;

	this.toHTML =  function()
	{
		let paragraphe = document.createElement('p');
		paragraphe.setAttribute("")
		let audio = document.createElement('audio');
		let button = document.createElement('button');
		let image = document.createElement('img');

	}
}

Song.prototype = Object.create(Media.prototype);

function Movie(title,duration,isPlaying,year)
{
	Media.call(this,title,duration,isPlaying);

	this.year = year;
}

Movie.prototype = Object.create(Media.prototype);


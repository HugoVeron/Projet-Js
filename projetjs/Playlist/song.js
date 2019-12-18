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

function Song(title,duration,isPlaying,artist)
{
	Media.call(this,title,duration,isPlaying);

	this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

function Movie(title,duration,isPlaying,year)
{
	Media.call(this,title,duration,isPlaying);

	this.year = year;
}

Movie.prototype = Object.create(Media.prototype);


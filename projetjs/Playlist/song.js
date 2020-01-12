// Création du constructeur media

function Media(title,duration,isPlaying)
{
	this.title = title;
	this.duration = duration;
	this.isPlaying = isPlaying;

	this.playm = function()
	{
		// Lire le fichier audio ou vidéo
		// Passer isPlaying à True
		let my_media_to_play = document.getElementById(title);
		my_media_to_play.play();
		isPlaying=true;
	}

	this.pausem = function()
	{
		// Stopper le fichier audio ou vidéo
		// Passer isPlaying à False
		let my_media_to_play = document.getElementById(title);
		my_media_to_play.pause();
	}

	this.resetmediareading = function()
	{
		let my_media_to_play = document.getElementById(title);
		my_media_to_play.currentTime = 0;
	}

	this.getTitle = function() 
	{
		return title;
	}

}

function Song(title,duration,isPlaying,artist,year,path)
{
	Media.call(this,title,duration,isPlaying);

	this.artist = artist;
	this.year = year;
	this.path = path;

	this.toHTML =  function()
	{
		//création de mon élément p
		let mon_article = document.getElementById("my_playlist");

		let paragraphe = document.createElement('p');
		paragraphe.setAttribute("class","mp3media");
		paragraphe.setAttribute("id",artist.concat("text"));
		let content_p = document.createTextNode(artist.concat(' - ',title));
		paragraphe.appendChild(content_p);

		//création de mon élément audio
		let audio = document.createElement('audio');
		audio.setAttribute("controls","");
		audio.setAttribute("src",path);
		audio.setAttribute("id",title);
		paragraphe.appendChild(audio);

		//création de mon élément button
		let button = document.createElement('button');
		button.setAttribute("type","button");
		switch (artist) {
			case "PLK":
			button.setAttribute("onclick","likePLK()");
			break;
			case "Red Hot Chili Peppers":
			button.setAttribute("onclick","likeRHCP()");
			break;
			case "Tobee":
			button.setAttribute("onclick","likeTobee()");
			break;
			case "Vivaldi":
			button.setAttribute("onclick","likeVivaldi()");
			break;
			case "Népal":
			button.setAttribute("onclick","likeNepal()");
			break;
		}
		

		//création de mon élément img
		let image = document.createElement('img');
		image.setAttribute("src","../image/unlike.png");
		image.setAttribute("id",artist.concat("like"));
		image.setAttribute("alt","like or unlike");

		// Finalisation de l'élément p avec le bouton like
		button.appendChild(image);
		paragraphe.appendChild(button);
		mon_article.appendChild(paragraphe);
	}
}

Song.prototype = Object.create(Media.prototype);

function Movie(title,duration,isPlaying,producer,year,path)
{
	Media.call(this,title,duration,isPlaying);

	this.year = year;
	this.producer = producer;
	this.path = path;

	this.toHTML = function()
	{
		//création de mon élément p
		let mon_article = document.getElementById("my_playlist");

		let paragraphe = document.createElement('p');
		paragraphe.setAttribute("class","mp4media");
		paragraphe.setAttribute("id",producer.concat("text"));
		let content_p = document.createTextNode(producer.concat(' - ',title));
		paragraphe.appendChild(content_p);

		//création de mon élément button
		let button = document.createElement('button');
		button.setAttribute("type","button");
		switch (producer) {
			case "Sardoche":
			button.setAttribute("onclick","likeSardoche()");
			break;
		}

		//création de mon élément img
		let image = document.createElement('img');
		image.setAttribute("src","../image/unlike.png");
		image.setAttribute("id",producer.concat("like"));
		image.setAttribute("alt","like or unlike");

		// Finalisation de l'élément p avec le bouton like
		button.appendChild(image);
		paragraphe.appendChild(button);

		// Ajout saut de ligne pour les vidéos
		let crlf = document.createElement("br");
		paragraphe.appendChild(crlf);

		//création de mon élément audio
		let video = document.createElement('video');
		video.setAttribute("controls","");
		video.setAttribute("src",path);
		video.setAttribute("id",title);
		paragraphe.appendChild(video);

		mon_article.appendChild(paragraphe);
	}
}

Movie.prototype = Object.create(Media.prototype);


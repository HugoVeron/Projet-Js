// The playlist object

function Playlist(liste_media)
{
	this.liste_media = liste_media;

	this.add = function() // Méthode pour ajouter un media existant à la playlist
	{

	}

	this.play = function() // Méthode pour lire la playlist
	{

	}

	this.next = function() // Méthode pour passer au prochain media
	{
		if(playlist_index == (playlist.length - 1)) // Si on est au bout la playlist --> on revient au début
		{
			playlist_index = 0;
		} 
		else // Sinon on avance simplement de 1
		{
		    playlist_index++;	
		}
	}

	this.stop = function() // Méthode pour arreter le media
	{

	}
		
}

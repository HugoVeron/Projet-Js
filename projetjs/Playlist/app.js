// Start the application

media_1 = ["song","Un peu de haine","0:16","false","PLK","2019","../media/plk-un-peu-de-haine-clip-officiel.mp3"];
media_2 = ["song","Rien d'spécial","0:16","false","Népal","2019","../media/nepal-rien-dspecial-laxvision.mp3"];
media_3 = ["song","Summer The Four Seasons","0:16","false","Vivaldi","1723","../media/vivaldi-summer-the-four-seasons.mp3"];
media_4 = ["song","Mach den hub hub hub","0:16","false","Tobee","2017","../media/tobee-helikopter-117-mach-den-hub-hub-hub-offizielles-video.mp3"];
media_5 = ["song","Californication","0:16","false","Red Hot Chili Peppers","1999","../media/red-hot-chili-peppers-californication-official-music-video.mp3"];
media_6 = ["video","Abordable","0:10","false","Sardoche","2019","../media/Sardoche_react.mp4"]

list_of_media = [];

list_of_media.push(media_1,media_2,media_3,media_4,media_5,media_6);
nowPlayingMedia = 0;

let my_playlist = new Playlist(list_of_media,nowPlayingMedia);
my_playlist.add();

nbr_media = list_of_media.length + 1;

while (nowPlayingMedia<nbr_media) {
	function playplaylist() {
		my_playlist.playmedia();
	}
	nowPlayingMedia++;

	function stopplaylist() {
		my_playlist.stopmedia();
	}

	function nextplaylist() {
		my_playlist.nextmedia();
	}
}




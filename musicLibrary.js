//Library prototype function
//  A Library has a name and a creator (both strings)
//  These are the only things required in order to create a music library
//  A Library has many playlists (starts as an empty array)
//  Playlist objects can be added to an instance of a library
class Library {
  constructor(name, creator) {
    this.name = name,
    this.creator = creator,
    this.playlists = [];
  }
  addPlaylistToLibrary(playlist) {
    this.playlists.push(playlist);
  }

}

//Playlist prototype function
//   Each Playlist has a name which is required upon creation
//   A Playlist also has many tracks
//  Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
//  Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
class Playlist {
  constructor(name) {
    this.name = name,
    this.tracks = [];
  }
  addTrackToPlaylist(track) {
    this.tracks.push(track);
  }
  overallRating() { //  overallRating function which will calculate the rating by averaging the rating of its tracks
    let totalRating = null;
    for (let track in this.tracks){
      totalRating += Number(this.tracks[track].rating);
    }
    return (totalRating / this.tracks.length);
  }
  totalDuration() { //  totalDuration function which will sum the duration of all of its tracks
    let totalLength = null;
    for (let track in this.tracks){
      totalLength += Number(this.tracks[track].length);
    }
    return totalLength;
  }
}


//Track prototype function
//  A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
class Track {
  constructor(title, rating, length) {
    this.title = title,
    this.rating = rating, //(an integer from 1 to 5)
    this.length = length;  //(integer in seconds)
  }
}

const sebsLib = new Library("Sebs Library of Music", 'Sebastian')

const christmasPlaylist = new Playlist('christmas');
const blink182Track1 = new Track("I Wont Be Home For Christmas",'4','180');
const natKingColeJingleBells = new Track('Jingle Bells','5','211');
const brunoMarsSilentNight = new Track('Silent Night','3.9','301');

// console.log(blink182Track1);
// console.log(christmasPlaylist);

christmasPlaylist.addTrackToPlaylist(blink182Track1);
christmasPlaylist.addTrackToPlaylist(natKingColeJingleBells);
christmasPlaylist.addTrackToPlaylist(brunoMarsSilentNight);

//console.log(christmasPlaylist);

//console.log(sebsLib);
sebsLib.addPlaylistToLibrary(christmasPlaylist);
//console.log(sebsLib);

christmasPlaylist.totalDuration();



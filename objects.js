var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle) {
    playlist['songTitle'] = 'artistName';
    Object.assign(playlist, {songTitle: "artistName"});
  //return playlist;
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
  
}
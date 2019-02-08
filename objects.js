var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist['songTitle'] = 'artistName';
  //return playlist;
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
  
}
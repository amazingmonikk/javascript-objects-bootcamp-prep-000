var playlist = {
  artistName: 'songTitle'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['songTitle'] = 'artistName';
  return object;
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
  
}
var playlist = {TwoPac:"All eyez on me"};


function updatePlaylist(playlist,artistName,songTitle)
{
    //Object.assign(playlist,{artistName:songTitle});
    playlist[artistName]=songTitle;
}


function removeFromPlaylist(playlist,artistName)
{
  delete playlist[artistName];
}



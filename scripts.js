var SC = require('soundcloud');

SC.initialize({
  client_id: 'shimieshimshim',
});

SC.get('/shimieshimshim').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});

SC.stream('/shimieshimshim').then(function(player){
  player.play();
});

var track_url = 'http://soundcloud.com/shimieshimshim';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});
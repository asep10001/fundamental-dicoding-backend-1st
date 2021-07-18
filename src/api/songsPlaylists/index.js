const SongsPlaylistsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'songsplaylist',
  version: '1.0.0',
  register: async (server, { songsPlaylistsService, playlistsService, validator }) => {
    const songsPlaylistsHandler = new SongsPlaylistsHandler(
      songsPlaylistsService,
      playlistsService,
      validator,
    );
    server.route(routes(songsPlaylistsHandler));
  },
};

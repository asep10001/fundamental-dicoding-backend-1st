const Joi = require('joi');

const SongsPlaylistsSchema = Joi.object({
  songId: Joi.string().required(),
});

module.exports = { SongsPlaylistsSchema };

const Joi = require('joi');

const PlaylistsSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = { PlaylistsSchema };

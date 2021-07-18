const InvariantError = require('../../exceptions/InvariantError');
const { SongsPlaylistsSchema } = require('./schema');

const SongsPlaylistsValidator = {
  validateSongsPlaylistsPayload: (payload) => {
    const validationResult = SongsPlaylistsSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SongsPlaylistsValidator;

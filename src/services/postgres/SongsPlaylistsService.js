/* eslint-disable no-underscore-dangle */
const { nanoid } = require('nanoid');
const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');
const { mapDBToModelAll } = require('../../utils');

class SongsPlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async addSongToPlaylist(songId, playlistId) {
    const id = `songs_playlists-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO songs_playlists VALUES($1, $2, $3) RETURNING id',
      values: [id, songId, playlistId],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new InvariantError('Lagu gagal ditambahkan ke playlists');
    }
    return result.rows[0].id;
  }

  async deleteSongFromPlaylist(songId, playlistId) {
    const query = {
      text: 'DELETE FROM songs_playlists WHERE song_id = $1 AND playlist_id = $2 RETURNING id',
      values: [songId, playlistId],
    };

    const result = await this._pool.query(query);

    // console.log(result);

    // if (!result.rows.length) {
    //   throw new NotFoundError('Lagu gagal dihapus. Id tidak ditemukan.');
    // }
  }

  async getSongsFromPlaylist(playlistId) {
    const query = {
      text: `SELECT songs.* FROM songs
      LEFT JOIN songs_playlists ON songs_playlists.song_id = songs.id
      WHERE songs_playlists.playlist_id = $1
      GROUP BY songs.id`,
      values: [playlistId],
    };

    const result = await this._pool.query(query);

    return mapDBToModelAll(result.rows);
  }

  async verifySong(songId) {
    const query = {
      text: 'SELECT * FROM songs WHERE  song_id = $1',
      values: [songId],
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('Lagu gagal diverifikasi. Id tidak ditemukan');
    }
  }

  async verifySongsPlaylists(songId, playlistId) {
    const query = {
      text: 'SELECT * FROM songs_playlists WHERE song_id = $1 AND playlist_id = $2',
      values: [songId, playlistId],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new InvariantError('Songs Playlists gagal diverifikasi');
    }
  }
}

module.exports = SongsPlaylistsService;

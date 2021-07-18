/* eslint-disable camelcase */
const mapDBToModelAll = (item) => item.map((i) => ({
  id: i.id,
  title: i.title,
  performer: i.performer,
}));

const mapDBToModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  inserted_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt: inserted_at,
  updatedAt: updated_at,
});

const mapDBTOModelPlaylists = (item) => {
  item.map((i) => ({
    id: i.id,
    name: i.name,
    username: i.owner,
  }));
};

module.exports = { mapDBToModelAll, mapDBToModel, mapDBTOModelPlaylists };

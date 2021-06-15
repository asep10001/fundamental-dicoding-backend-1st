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

module.exports = { mapDBToModelAll, mapDBToModel };

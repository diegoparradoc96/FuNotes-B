import { Book, BookCover } from "../models";

Book.belongsTo(BookCover, { foreignKey: "id_cover", as: "bookcover" });
BookCover.hasMany(Book, { foreignKey: "id_cover", as: "book" });

import { FilesCollection } from "meteor/ostrio:files";

export default (GameImages = new FilesCollection({
  collectionName: "gameimages"
  // storagePath: "app/uploads/games"
}));

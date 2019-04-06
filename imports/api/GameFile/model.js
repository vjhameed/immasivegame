import { FilesCollection } from "meteor/ostrio:files";

export default (GameFile = new FilesCollection({
  collectionName: "gamefiles"
  // storagePath: "app/uploads/games"
}));

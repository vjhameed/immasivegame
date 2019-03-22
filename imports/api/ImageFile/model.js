import { FilesCollection } from "meteor/ostrio:files";

export default (ImageFiles = new FilesCollection({
  collectionName: "imagefiles"
  // storagePath: "../../../../../public/app/uploads/Images"
}));

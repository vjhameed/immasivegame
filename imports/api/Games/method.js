import Games from "./model";
import { Meteor } from "meteor/meteor";
// import fs from "fs";
// const unzip = require("unzip");

import GameImage from "../GameImage/model";

Meteor.methods({
  gameCreate(data) {
    if (data.length > 0) {
      const imagepath = GameImage.findOne({ _id: data[3] }).link();

      Games.insert({
        title: data[0],
        desc: data[1],
        category: data[2],
        image: imagepath,
        file: data[4],
        posted_at: new Date(),
        user_id: Meteor.userId()
      });

      return true;
    } else {
      throw new Meteor.Error("Please Enter all the data for the game");
    }
  },
  // gameunzip(fileObj) {
  //   fs.createReadStream(fileObj.path).pipe(
  //     unzip.Extract({ path: fileObj._storagePath + "\\game" + fileObj._id })
  //   );
  //   const fileContents = fs.createReadStream(fileObj.path);
  //   return true;
  // },
  gameDelete(games) {
    games.map(item => {
      Games.remove({ _id: item });
    });

    return true;
  }
});

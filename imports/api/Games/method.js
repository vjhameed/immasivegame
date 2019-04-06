import Games from "./model";
import { Meteor } from "meteor/meteor";
import fs from "fs";
const unzip = require("unzip");

Meteor.methods({
  gameCreate(data) {
    if (data != "") {
      Games.insert({
        title: data[0],
        desc: data[1],
        category: data[2],
        image: data[3],
        file: data[4],
        posted_at: new Date()
      });

      return true;
    } else {
      throw new Meteor.Error("Please Enter all the data for the game");
    }
  },
  gameunzip(fileObj) {
    console.log(fileObj);
    fs.createReadStream(fileObj.path).pipe(
      unzip.Extract({ path: fileObj._storagePath + "\\game" + fileObj._id })
    );

    const fileContents = fs.createReadStream(fileObj.path);

    return true;
  },
  gameDelete(games) {
    games.map(item => {
      Games.remove({ _id: item });
    });

    return true;
  }
});

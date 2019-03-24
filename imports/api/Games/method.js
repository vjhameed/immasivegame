import Games from "./model";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  gameCreate(data) {
    if (data != "") {
      Games.insert({
        title: data[0],
        desc: data[1],
        image: data[2],
        posted_at: new Date()
      });

      return true;
    } else {
      throw new Meteor.Error("Please Enter all the data for the game");
    }
  },
  gameDelete(games) {
    games.map(item => {
      Games.remove({ _id: item });
    });

    return true;
  }
});

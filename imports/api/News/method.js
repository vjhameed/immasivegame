import News from "./model";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  artCreate(data) {
    if (data != "") {
      News.insert({
        title: data[0],
        desc: data[1],
        image: data[2],
        posted_at: new Date()
      });

      return true;
    } else {
      throw new Meteor.Error("Please Enter a name for a new category");
    }
  },
  artDelete(arts) {
    arts.map(item => {
      News.remove({ _id: item });
    });

    return true;
  }
});

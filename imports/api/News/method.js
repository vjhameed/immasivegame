import News from "./model";
import { Meteor } from "meteor/meteor";
import ImageFile from "../ImageFile/model";
Meteor.methods({
  artCreate(data) {
    if (data != "") {
      const imagepath = ImageFile.findOne({ _id: data[2] }).link();

      News.insert({
        title: data[0],
        desc: data[1],
        image: imagepath,
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

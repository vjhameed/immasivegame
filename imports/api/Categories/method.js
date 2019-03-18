import Categories from "./model";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  catCreate(title) {
    if (title != "") {
      Categories.insert({
        title
      });

      return true;
    } else {
      throw new Meteor.Error("Please Enter a name for a new category");
    }
  },
  catDelete(cats) {
    cats.map(item => {
      Categories.remove({ _id: item });
    });

    return true;
  }
});

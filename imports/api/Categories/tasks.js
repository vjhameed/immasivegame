import { Meteor } from "meteor/meteor";
import Categories from "./model";

Meteor.publish("categories.all", function() {
  return Categories.find();
});

Meteor.publish("categories.few", function() {
  return Categories.find()
    .fetch()
    .limit(5);
});

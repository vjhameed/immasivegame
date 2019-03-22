import { Meteor } from "meteor/meteor";
import News from "./model";

Meteor.publish("news.all", function() {
  return News.find();
});

// Meteor.publish("categories.few", function() {
//   return Categories.find()
//     .fetch()
//     .limit(5);
// });

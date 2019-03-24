import { Meteor } from "meteor/meteor";
import Games from "./model";

Meteor.publish("games.all", function() {
  return Games.find();
});

// Meteor.publish("categories.few", function() {
//   return Categories.find()
//     .fetch()
//     .limit(5);
// });

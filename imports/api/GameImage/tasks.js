import GameImages from "./model";

Meteor.publish("game.images.all", function() {
  return GameImages.find().cursor;
});

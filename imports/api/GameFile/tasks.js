import GameFile from "./model";

Meteor.publish("game.files.all", function() {
  return GameFile.find().cursor;
});

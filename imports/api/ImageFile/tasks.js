import ImageFiles from "./model";

Meteor.publish("images.all", function() {
  return ImageFiles.find().cursor;
});

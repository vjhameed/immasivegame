import ImageFiles from "./model";

Meteor.publish("news.images.all", function() {
  return ImageFiles.find().cursor;
});

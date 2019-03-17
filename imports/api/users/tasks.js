Meteor.publish("user.ready", function() {
  return Meteor.user() || null;
});

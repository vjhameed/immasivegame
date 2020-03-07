Meteor.publish("user.ready", function() {
  return Meteor.user() || null;
});

Meteor.publish("users.all", function() {
  return Meteor.users.find({});
});

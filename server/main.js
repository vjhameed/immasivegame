import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import "../imports/api/users/tasks";
import "../imports/api/Categories/index";
import "../imports/api/News/index";
import "../imports/api/Games/index";
import "../imports/api/GameImage/index";
import "../imports/api/GameFile/index";
import "../imports/api/ImageFile/index";

Accounts.onCreateUser((options, user) => {
  Meteor.setTimeout(function() {
    Roles.addUsersToRoles(user._id, "simple-new-user");
  }, 0);

  return user;
});

Meteor.startup(() => {
  // var users = [
  //   {
  //     name: "Hameed Khan",
  //     email: "hameed@immasive.com",
  //     roles: ["admin"]
  //   }
  // ];
  // var id, user;
  // id = Accounts.createUser({
  //   email: users[0].email,
  //   password: "securesystem",
  //   profile: { name: users[0].name }
  // });
  // // email verification
  // Meteor.users.update({ _id: id }, { $set: { "emails.0.verified": true } });
  // Roles.addUsersToRoles(id, users[0].roles);
  // console.log(Roles.userIsInRole(id, "admin"));
});

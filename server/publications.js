Meteor.publish('userData', function () {
    return Meteor.users.find();
});

Meteor.publish('nodes', function () {
    return Nodes.find();
});

//返回单个Topic
Meteor.publish('topics', function(topicId) {
  check(topicId, String);
  return Topics.find({_id: topicId});
});

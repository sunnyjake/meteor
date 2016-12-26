import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
ViewModel.mixin({
  users: Users.find(),
  test1: 'value'
});

Template.test.viewmodel({
  // mixin: ['test', 'users'],
  mixin: 'users',
  name: '',
  greet: '',
  val: [],
  test: function (name) {
    if (this.name().length) {
      this.val().push("Hello ".concat(this.name()));
    }
    else {
      this.greet('');
    }
  },
  showUsers: function () {
    console.log(this);
    console.log(this.users());
    return this.users();
  }
});

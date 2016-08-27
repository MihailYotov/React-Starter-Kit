'use strict';

var Dispatcher = require('../../dispatcher/appDispatcher');
var ActionTypes = require('../../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';
var _people = [];

var PeopleStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllPeople: function () {
        return _people;
    },

    getPersonById: function (id) {
        return _.find(_people, {id: id * 1})
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _people = action.initialData.people;
            PeopleStore.emitChange();
            break;
        case ActionTypes.CREATE_PERSON:
            _people.push(action.person);
            PeopleStore.emitChange();
            break;
        case ActionTypes.UPDATE_PERSON:
            var existingPerson = _.find(_people, {id: action.person.id * 1});
            var existingPersonIndex = _.indexOf(_people, existingPerson);
            _people.splice(existingPersonIndex, 1, action.person);
            PeopleStore.emitChange();
            break;
        case ActionTypes.DELETE_PERSON:
            _.remove(_people, function (person) {
                return action.id === person.id;
            });
            PeopleStore.emitChange();
            break;
    }
});

module.exports = PeopleStore;

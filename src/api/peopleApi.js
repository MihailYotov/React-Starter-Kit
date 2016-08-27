'use strict';

//  This file is mocking a web API by hitting hard coded data.
var people = require('./peopleData').people;
var _ = require('lodash');

//  This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (person) {
    var tempIds = [],
    biggestId;

    for (var i = 0; i < people.length; i++) {
        tempIds.push(people[i].id);
    }

    return biggestId = Math.max.apply(Math, tempIds) + 1;
};

var _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); // return cloned copy so that the item is passed by value instead of by reference
};

var PeopleApi = {
    getAllPeople: function () {
        return _clone(people);
    },

    getPersonById: function (id) {
        var person = _.find(people, {id: id * 1});
        return _clone(person);
    },

    savePerson: function (person) {
        // pretend an ajax call to web api is made here
        console.log('Pretend this just saved the person to the DB via AJAX call...');

        if (person.id) {
            var existingPersonIndex = _.indexOf(people, _.find(people, {id: person.id}));
            people.splice(existingPersonIndex, 1, person);
        } else {
            // Just simulating creation here.
            // The server would generate ids for new people in a real app.
            // Cloning so copy returned is passed by value rather than by reference.
            person.id = _generateId(person);
            people.push(person);
        }

        return _clone(person);
    },

    deletePerson: function (id) {
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
        _.remove(people, {id: id * 1});
    }
};

module.exports = PeopleApi;

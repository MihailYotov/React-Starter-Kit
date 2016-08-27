'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');

var PeopleApi = require('../api/peopleApi');
var ActionTypes = require('../constants/actionTypes');

var PeopleActions = {
    createPerson: function (person) {
        var newPerson = PeopleApi.savePerson(person);

        // Hey dispatcher, go tell all the stores than an person was just created.
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_PERSON,
            person: newPerson
        });
    },

    updatePerson: function (person) {
        var updatedPerson = PeopleApi.savePerson(person);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_PERSON,
            person: updatedPerson
        });
    },

    deletePerson: function (id) {
        PeopleApi.deletePerson(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_PERSON,
            id: id
        });
    }
};

module.exports = PeopleActions;

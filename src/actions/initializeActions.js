'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var PeopleApi = require('../api/peopleApi');

var InitializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                people: PeopleApi.getAllPeople()
            }
        })
    }
};

module.exports = InitializeActions;
'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('notes', 'NoteController').apiOnly();
Route.post('/users', 'UserController.create');
Route.post('/sessions', 'SessionController.create');

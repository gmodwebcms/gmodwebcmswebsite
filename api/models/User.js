/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		id : {
			type: 'integer',
			unique: true,
    	autoIncrement: true,
    	primaryKey: true,
		},
		username: {
			type: 'string',
			required: true,
			unique: true
		},
		email: {
			type: 'string',
			required: true,
			unique: true
		},
		password: {
			type: 'string',
			required: true
		},
		money: {
			type: 'float',
			defaultsTo: 0.0
		},
		role: {
			type: 'string',
			defaultsTo: 'USER',
			in: ['USER', 'MOD', 'ADMIN', 'FOUNDER']
		},
		developer: {
			type: 'boolean',
			defaultsTo: false
		},
		ip: {
			type: 'string',
			ipv4: true
		},
		lang: {
			type: 'string',
			defaultsTo: 'fr'
		},
		created: {
			type: 'datetime',
			defaultsTo: function () {
        return new Date();
      }
		},
		modified: {
			type: 'datetime'
		},
		tokens: {
			collection: 'Token',
			via: 'user'
		},
		licenses: {
			collection: 'License',
			via: 'user'
		}
  }
};

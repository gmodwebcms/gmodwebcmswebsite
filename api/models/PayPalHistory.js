/**
 * PayPalHistory.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
			type: 'integer',
			unique: true,
    	autoIncrement: true,
    	primaryKey: true,
		},

    user: {
			model: 'User',
			required: true
		},

    paymentId: {
      type: 'string',
      size: 20,
      required: true
    },

    paymentAmount: {
      type: 'float',
      required: true
    },

    taxAmount: {
      type: 'float',
      required: true
    },

    buyerEmail: {
      type: 'string',
      email: true,
      required: true
    },

    paymentDate: {
      type: 'datetime',
      required: true
    },

    license: {
      model: 'License'
    },

    hosting: {
      model: 'Hosting'
    },

    state: {
      type: 'string',
      in: ['COMPLETED', 'SUSPENDED', 'REFUNDED', 'REVERSED'],
      defaultsTo: 'COMPLETED'
    },

    reversedReason: {
      type: 'string',
      in: ['BUYER_COMPLAINT', 'UNAUTHORIZED']
    },

    caseDate: {
      type: 'datetime'
    },

    refundDate: {
      type: 'datetime'
    }

  }
};

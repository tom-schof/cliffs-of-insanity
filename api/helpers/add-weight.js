var addWeight = require('../controllers/weight/add');
module.exports = {


  friendlyName: 'Add weight',


  description: 'logs the users weight',


  inputs: {
    userId: {
      type: 'number',
      required: true
    },
    pounds: {
      type: 'number',
      required: true
    },
  },

  fn: async function (inputs, exits) {

    const add = await Weight.create({
			user: inputs.userId,
			pounds: inputs.pounds,
		}).meta({
			fetch: true
		});

		console.log(add);

    // All done.
    return exits.success();

  }


};
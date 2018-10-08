module.exports = {


  friendlyName: 'Get user',


  description: 'Finds the user and returns their data',


  inputs: {
    username: {
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      outputFriendlyName: 'User',
      outputType: 'ref'
    },

  },


  fn: async function (inputs, exits) {

    // Get user id.
    var username = inputs.username;
	
		// console.log("it was undefined")
	
		const find = await User.find({
			where: {
				username: username
			}

		}).meta({
			fetch: true
		});

    // Send back the result through the success exit.
    return exits.success(find);

  }


};


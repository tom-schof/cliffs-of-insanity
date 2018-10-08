module.exports = {


  friendlyName: 'Update goal',


  description: 'updates the user goal',


  inputs: {
    username: {
      type: 'string',
      required: true
    },
    goal: {
      type: 'number',
      required: true
    }
  },
  exits: {

    success: {
      outputFriendlyName: 'goal',
      outputType: 'ref'
    },

  },



  fn: async function (inputs, exits) {


    const update = await User.update({
      username: inputs.username,

    }).set({

      goal: inputs.goal

    }).fetch();

    console.log(update);
    // All done.
    return exits.success(update);

  }


};
// run this script with 'sails run progress username ' ex: sails run progress admin 


module.exports = {


  friendlyName: 'Progress',


  description: 'Returns how much weight a user has lost. Run this script with sails run progress',

  args: ['username'],
  inputs: {
    username: {
      type: 'string',
      required: true
    },
  },


  fn: async function (inputs, exits) {

    sails.log('Running custom shell script... (`progress`)');

    // All done.

    await sails.helpers.weightLost(inputs.username);
    return exits.success();

  }


};


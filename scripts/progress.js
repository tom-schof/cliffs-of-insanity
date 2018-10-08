module.exports = {


  friendlyName: 'Progress',


  description: 'Returns how much weight a user has lost.',


  inputs: {

  },


  fn: async function (inputs, exits) {

    sails.log('Running custom shell script... (`progress`)');

    // All done.

    await sails.helpers.weightLost('admin');
    return exits.success();

  }


};


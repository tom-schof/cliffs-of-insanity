// run this script with 'sails run login-update username password' ex: sails run login-update admin admin
module.exports = {


  friendlyName: 'Login-updateWeight-updateGoal',


  description: 'Login a user, log their weight for the past two weeks, and update their goal.' ,

  args: ['username', 'password'],
  inputs: {
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
 


  },


  fn: async function (inputs, exits) {

    sails.log('Running custom shell script... (`login-updateWeight-updateGoal`)');

    await sails.helpers.login(inputs.username, inputs.password);
    const user = await sails.helpers.getUser(inputs.username);
    // console.log(user[0].id);

    await sails.helpers.addWeight(user[0].id, 180);
    await sails.helpers.addWeight(user[0].id, 179);
    await sails.helpers.addWeight(user[0].id, 178);
    await sails.helpers.addWeight(user[0].id, 177);
    await sails.helpers.addWeight(user[0].id, 176);
    await sails.helpers.addWeight(user[0].id, 175);
    await sails.helpers.addWeight(user[0].id, 174);
    await sails.helpers.addWeight(user[0].id, 173);
    await sails.helpers.addWeight(user[0].id, 172);
    await sails.helpers.addWeight(user[0].id, 171);
    await sails.helpers.addWeight(user[0].id, 170);
    await sails.helpers.addWeight(user[0].id, 169);
    await sails.helpers.addWeight(user[0].id, 168);
    await sails.helpers.addWeight(user[0].id, 167);

    await sails.helpers.updateGoal(user[0].username, 160);
   
  
    // All done.
    return exits.success();

  }


};
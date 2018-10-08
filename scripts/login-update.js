// module.exports = {


//   friendlyName: 'Login',


//   description: 'Login a user. Log their weight for the past two weeks and update their goal',

//   args: ['username', 'password', 'day1', 'day2' ,'day3' ,'day4' ,'day5' ,'day6' ,'day7' ,'day8' ,'day9' ,'day10', 'day11', 'day12', 'day13', 'day14', 'goal'],
//   inputs: {
//     username: { type: 'string', required: true },
//     password: { type: 'string', required: true },
//     day1: { type: 'number', required: true },
//     day2: { type: 'number', required: true },
//     day3: { type: 'number', required: true },
//     day4: { type: 'number', required: true },
//     day5: { type: 'number', required: true },
//     day6: { type: 'number', required: true },
//     day7: { type: 'number', required: true },
//     day8: { type: 'number', required: true },
//     day9: { type: 'number', required: true },
//     day10: { type: 'number', required: true },
//     day11: { type: 'number', required: true },
//     day12: { type: 'number', required: true },
//     day13: { type: 'number', required: true },
//     day14: { type: 'number', required: true },
//     goal: { type: 'number', required: true },


//   },


//   fn: async function (inputs, exits) {

//     sails.log('Running custom shell script... (`login-update`)');

//     User.postToken({inputs: inputs.username, password: inputs.password}, res);



//     // All done.
//     return exits.success();

//   }


// };

module.exports = {


  friendlyName: 'Login-updateWeight-updateGoal',


  description: 'Login a user, log their weight for the past two weeks, and update their goal',

  
  // inputs: {
  //   username: {
  //     type: 'string',
  //     required: true
  //   },
  //   password: {
  //     type: 'string',
  //     required: true
  //   },
  //   day1: {
  //     type: 'number',
  //     required: true
  //   },



  // },


  fn: async function (inputs, exits) {

    sails.log('Running custom shell script... (`login-updateWeight-updateGoal`)');

    await sails.helpers.login("admin", "admin");
    const user = await sails.helpers.getUser("admin");
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
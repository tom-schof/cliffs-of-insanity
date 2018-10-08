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
const postToken = require("../api/controllers/auth/post-token");
const addWeight = require("../api/controllers/weight/add");
const find = require("../api/controllers/users/find");
module.exports = {


  friendlyName: 'Login',


  description: 'Login a user. Log their weight for the past two weeks and update their goal',

  args: ['username', 'password', 'day1'],
  inputs: {
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    day1: {
      type: 'number',
      required: true
    },



  },


  fn: async function (inputs, exits) {

    sails.log('Running custom shell script... (`login-update`)');

    // console.log(inputs);

    await postToken(inputs);
    const user = User.find(inputs.username);
    console.log(user);
    user.addWeight[inputs.day1];


    // All done.
    return exits.success();

  }


};
var postToken = require("../controllers/auth/post-token");

module.exports = {

    friendlyName: 'Login',


    description: 'Login a user.',
  
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
  
      sails.log('Running custom shell script... (`login`)');
  
      // console.log(inputs);
    //   console.log(sails);
  
      await postToken(inputs);
  
      return exits.success();
  
    }
  
  
  };
  
  
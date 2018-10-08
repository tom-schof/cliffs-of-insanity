module.exports = {


  friendlyName: 'Weight lost',


  description: 'Returns how much weight has been lost for a given user',


  inputs: {
    username: {
      type: 'string',
      required: true
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    // All done.
    const user = await sails.helpers.getUser(inputs.username);
    const userId = user[0].id;
    const weights = await Weight.find({user: userId});
    // console.log(weights);
    var max = 0;
    var min = Infinity;
    var weightLost = 0;
    for (i in weights){
      if( weights[i].pounds > max){
        max = weights[i].pounds;
      }
      if( weights[i].pounds < min){
        min = weights[i].pounds;
      }
    }
    weightLost = max - min;

    if (weightLost > 0){
      console.log(`Congratulations! You have lost ${weightLost} pounds! Your maximum weight was ${max} pounds and you got all the way down to ${min} pounds! `);
    }else{
      console.log(`I'm sorry your diet isn't going so well.`);
    }
    return exits.success();

  }


};


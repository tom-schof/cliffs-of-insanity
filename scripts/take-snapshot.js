module.exports = {
  friendlyName: 'Take Snapshot',
  description: 'Take a snapshot of all models',

  fn: async function(inputs, exits) {
		var models = Object.keys(sails.models);
		var realModels = [];
		for (var i in models) {
			if (models[i] !== 'archive') {
				realModels.push(models[i]);
			}
		}

		for (var j in realModels) {
			console.log(realModels[j]);
			console.log('-----------------');
			var data = await sails.models[realModels[j]].find();
			console.log(data);
		}
		
    // All done.
    return exits.success();
  },
};


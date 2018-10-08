module.exports = async function findUser(req, res) {
	let username;
	if (typeof req.body == "undefined") {
		// console.log("it was undefined")
		username = req.username;
	} else {
		//  console.log('else');
		username = req.body.username;
	}
	if (username !== "") {
		const find = await User.find({
			where: {
				username: username
			}

		}).meta({
			fetch: true
		});
		console.log(find);
		return  res.status(200).send(find);
	
	} else {
		const find = await User.find({}).meta({
			fetch: true
		});
		if(err)
		// console.log(res);
		return res.status(200).send(find);
	
	}

};
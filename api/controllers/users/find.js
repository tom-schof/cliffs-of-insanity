module.exports = async function findUser(req, res) {
	var username = req.params.username;
	if (username !== ""){
		const find = await User.find({
			where: {
				username: username
			}
		
		}).meta({fetch: true});
	
		return res.json(find);
	}
	else{
		const find = await User.find({
		}).meta({fetch: true});
	
		return res.json(find);
	}

};
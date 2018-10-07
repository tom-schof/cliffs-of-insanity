module.exports = function listWeight(req, res) {
	const weights = Weight.find({});

	return res.status(200).send(weights);
};

// curl -X POST \
//   http://localhost:1337/v1/login \
//   -H 'Cache-Control: no-cache' \
//   -H 'Content-Type: application/json' \
//   -H 'Postman-Token: 8bb42e15-0839-480f-8267-1ab437e0f7e0' \
//   -d '{
// 	"username": "admin",
// 	"password":"admin"
// }'

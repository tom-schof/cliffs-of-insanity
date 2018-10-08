module.exports = async function postToken(req, res) {
//  console.log(req.body);
 var username;
 var password;
  if ( typeof req.body == "undefined"){
    // console.log("it was undefined")
   username = req.username;
   password = req.password;
 }else{
  //  console.log('else');
  username = req.body.username;
  password = req.body.password;
 }
  
  
  user = await User.findByCredentials(username, password);

  return jwtService.makeToken(user, (err, token) => {
    if (err) {
      return res.unauthorized(err);
    }
    console.log(token);
    return res.status(200).send(token);
  });

};

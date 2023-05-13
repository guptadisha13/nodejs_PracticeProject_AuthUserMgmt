const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


router.get("/",(req,res)=>{
    res.send(JSOn.stringify(friends,null,4));
});


router.get("/:email",(req,res)=>{
    const email = req.param.email;
    res.send(friends[email]);
});


router.post("/",(req,res)=>{
  if(req.body.email){
      friends[req.body.email] = {
          "firstName":req.body.firstname,
          "lastName": req.body.lastName,
          "DOB": req.body.DOB
      }
  }
  res.send("The user"+('')+(req.body.firstName)+" Has been added!");
});


router.put("/:email", (req, res) => {
    const email = req.param.email;
    let friend = friends[email];
    if(friend){
        let DOB = req.body.DOB;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        if(DOB){
            friend["DOB"] = DOB;
            friend["firstName"] = firstName;
            friend["lastName"] = lastName;
        }
        friends[email] = friend;
        res.send(`Friend with the email ${email} updated.`);
    }
    else{
        res.send("Unable to find friend!");
    }
});


router.delete("/:email", (req, res) => {
  const email = re.params.email;
  if(email){
      delete friends[email]
  }
  res.send('Friend with the email ${email} deleted.');
});

module.exports=router;

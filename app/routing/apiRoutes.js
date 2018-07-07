var listOfFriends = require("../data/friends");

module.exports= function(app){

    app.get("/api/friends", function(req, res){
        res.json(listOfFriends);
    })

    app.post("/api/friends", function(req,res){
        listOfFriends.push(req.body);
        res.json(true);
        
    })
   
};
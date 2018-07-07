# FriendFinder

I was unable to complete the logic portion of the assingment which prevented me from popping up a modal with the most compraible user. I have tried the following

    $.ajax({url: currentURL + "/api/friends", method: "GET"}).then(function(listOfFriends){
                console.log(listOfFriends);
                console.log(newUserInfo);
                
                function scoring(newUserInfo) {
                //totalling up each friends scores in the server
                var score = 0;
                for (var j = 0; j < newUserInfo.scores.length; j++) {
                    score += parseInt(newUserInfo.scores[j]);
                }
                // console.log(score);
            }
            scoring(newUserInfo);
            
            console.log(score);
            var differenceArrayNum = [];

            function sortNumber(a,b) {
                return a.difference - b.difference;
            }

            for (var i = 0; i < listOfFriends.length; i++) {
                console.log(listOfFriends[i].name)
                console.log("score: ", scoring(listOfFriends[i]))
                var difference = Math.abs(Newscore - scoring(listOfFriends[i]));
                var coupled = {
                    difference: difference,
                    friend: listOfFriends[i]
                };
                differenceArrayNum.push(coupled)
            }
            differenceArrayNum.sort(sortNumber)

            console.log(differenceArrayNum)
            console.log(differenceArrayNum[0].friend.name)                          
          
            })


The problem is that the "score" i get from the new user's input is not passing to the next function where I want to compare differences and have been stuck in this part.
var friendData = require("../data/friends");

var newUser = {
    name: 'Jacob Deming',
    photo:
        'https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg',
    scores: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
};

// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
// It will do this by sending out the value "true" have a table
// req.body is available since we're using the body parsing middleware
// console.log("req.body", req.body);
// currentFriendArray = req.body;

// newUser = req.body;
// var currentArray = friendData
// console.log("currentArray", currentArray);
var newUserScores = newUser.scores;
//Or newUser.scores ???

var candidates = friendData
var differential = 0;
// var totaldifferential = 0;
var difArray = [];

for (i = 0; i < candidates.length; i++) {
    var currentCandidate = friendData[i];
    var currentCandidateScores = friendData[i].scores;
    var currentCompare = candidates[i].scores;
    var totaldifferential = 0;
    // console.log(newUserScores[j]);
    // console.log( currentCandidateScores[j]);
    // console.log("currentCompare", currentCompare);
    for (j = 0; j < currentCandidateScores.length; j++) {
        differential = Math.abs(parseInt(newUserScores[j]) - parseInt(currentCandidateScores[j]));
        totaldifferential += differential;
    }
    difArray.push(totaldifferential);
}
console.log("difArray", difArray);
var smallest = [difArray[0]];
var bestMatch = [];
console.log("smallest", smallest);
// var refArray = [];

for (var i = 0; i < difArray.length; i++) {
    if (difArray[i] < smallest[0]) {
        bestMatch = [friendData[i]];
        smallest = [difArray[i]];
        console.log("smallest <", smallest);
        console.log("bestMatch <", bestMatch);
    }
    else if (difArray[i] === smallest[0]) {
        bestMatch.push(friendData[i]);
        smallest.push(difArray[i]);

        console.log("bestMatch =", bestMatch);
        console.log("smallest =", smallest);
    }
}
console.log("smallest", smallest);
var num = bestMatch.length;
var i;
var i = Math.floor(Math.random() * num);
var selected = bestMatch[i];
console.log("selected", selected);

//logic to find best friend
friendData.push(newUser);
    // console.log("friendData", friendData);

    // res.json(selected.name, selected.photo);


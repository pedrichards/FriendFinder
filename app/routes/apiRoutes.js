// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");





// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    console.log("req.body", req.body);
    var newUser = req.body;

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
    //logic to find best friend

    console.log("friendData", friendData);
    res.json(selected)
    // res.json(selected.name, selected.photo);

  });


};

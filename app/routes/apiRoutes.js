// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends");


function showMyModalSetTitle(myName, myImage) {

  /*
   * '#myModayTitle' and '#myModalBody' refer to the 'id' of the HTML tags in
   * the modal HTML code that hold the title and body respectively. These id's
   * can be named anything, just make sure they are added as necessary.
   *
   */

  $('#myModalTitle').html(myName);
  $('#myModalBody').html(myImage);

  $('#myModal').modal('show');
}

function runFinder() {
  var currentArray = friendData.slice(-1);
  var candidates = friendData.slice(0, -1);
  var friendsRelative = [];
  var differential = 0;
  var totaldifferential = 0;
  var difArray = [];
  // var friendjectsValues = friendData;
  for (i = 0; i < candidates.length; i++) {
    var currentCompare = candidates[i].scores;
    for (i = 0; i < currentCompare.length; i++) {
      differential = Math.abs(currentArray[i] - currentCompare[i]);
      totaldifferential = differential++;
    }
    difArray.push(totaldifferential);
  }
  var smallest = [difArray[0]];
  // var refArray = [];

  for (var i = 0; i < difArray.length; i++) {
    if (difArray[i] < smallest) {
      smallest = [difArray[i]];
    }
    else if (difArray[i] = smallest[0]) {
      smallest.push(difArray[i];)
    }

    var num = bestCandidateArray.length;
    var i;
    var i = new Random().nextInt(num);
    var fIndex = bestCandidateArray[i];
    var selected = friendData[fIndex];
    console.log(selected.name, selected.photo);
    showMyModalSetTitle(selected.name, selected.photo);
  }
}


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
    currentFriendArray = req.body;
    runFinder();
    //logic to find best friend
    friendData.push(req.body);
    console.log(friendData);
    res.json();

  });


};

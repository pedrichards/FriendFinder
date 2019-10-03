// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendjects = [{
    "name": "Dorian Gremp",
    "photo": "https://www.alaskawildlife.org/wp-content/uploads/2016/12/moose-face.jpg",
    "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
    "name": "Buster Keaton",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Busterkeaton_edit.jpg/220px-Busterkeaton_edit.jpg",
    "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
}, {
    "name": "Jeremiah Scanlon", "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Martin_Scorsese_Cannes_2010.jpg/200px-Martin_Scorsese_Cannes_2010.jpg",
    "scores": ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendjects;

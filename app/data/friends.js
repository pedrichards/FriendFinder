// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendjects = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
}, {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"]
}, {
    "name": "Jeremiah Scanlon", "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
}, {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"]
}, {
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "scores": ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
}, { "name": "Jordan Biason", "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg", "scores": ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"] }, { "name": "Mike", "photo": "link", "scores": ["3", "3", "3", "3", "2", "3", "3", "3", "3", "3"] }, { "name": "Mike", "photo": "link", "scores": ["3", "3", "3", "3", "2", "3", "3", "3", "3", "1"] }, { "name": "Mike", "photo": "link", "scores": ["3", "3", "3", "3", "2", "3", "3", "3", "1", "1"] }, { "name": "Mike", "photo": "link", "scores": ["3", "3", "3", "1", "1", "3", "1", "1", "1", "1"] }, { "name": "Mike", "photo": "link", "scores": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"] }, { "name": "andy", "photo": "https://d.newsweek.com/en/full/1186553/michael-myers-halloween-2018.jpg?w=737&f=cd6cb284ca68a2c291ba1e79b2330cd3", "scores": ["5", "1", "3", "5", "1", "1", "4", "3", "5", "5"] }, { "name": "Moose", "photo": "memoose", "scores": ["2", "3", "4", "4", "2", "3", "3", "2", "3", "2"] }, { "name": "blah", "photo": "<img>", "scores": ["2", "1", "2", "3", "4", "3", "2", "2", "2", "3"] }, { "name": "blah", "photo": "<img>", "scores": ["2", "1", "2", "3", "4", "3", "2", "2", "2", "3"] }, { "name": "blah", "photo": "blah", "scores": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"] }, { "name": "blah", "photo": "blah", "scores": ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"] }, { "name": "3", "photo": "3", "scores": ["3", "1", "1", "1", "1", "1", "1", "1", "1", "1"] }];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendjects;

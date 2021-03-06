var https = require("https");

function getRepos(username, callback){
    var options = {
        host : 'api.github.com',
        path : '/users/' + username + '/repos',
        method : 'GET',
        headers: {'user-agent': 'node.js'}
    };

    var request = https.request(options, function (response) {
        var body = "";
        response.on("data", function (chunk) {
            body += chunk.toString('utf8');
        });
        response.on("end", function () {
            var repos = [];
            var json = JSON.parse(body);
            //console.log(body); // if we run console then json for each working... may be we need to store body
            json.forEach(function (repo) {
                repos.push({
                    name : repo.name,
                    description : repo.description
                });
            });
            callback(repos);
        });

        response.on("error", function (error) {
           console.log(error.message);
        });
    });
    request.end();
}

getRepos("kuldeeparora", function (repos) {
    console.log("kuldeep repos " , repos);
});

getRepos("mongodb", function (repos) {
    console.log("mongodb repos " , repos.length);
});
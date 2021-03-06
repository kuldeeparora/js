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

    request.on("error", function (error) {
        console.log(error.message);
    });

    request.end();

};

module.exports.getRepos = getRepos;
// $(document).ready(function() {
//     var loadRepositories = function() {
//         var url = "https://api.github.com/users/fvcproductions/repos?callback=?";
//         $.getJSON(url, function(data) {
//             var repos = data.data;
//             if (repos.length > 1) {
//                 for (var repo in repos) {
//                     if (repos.hasOwnProperty(repo)) {
//                         if (repos[repo].language === null) {
//                             repos[repo].language = "";
//                         }
//                         $('.projects .github-projects').append("<div class='card'><a href='" + repos[repo].html_url + "' target='_blank'><button type='button' class='btn btn-primary-outline'>" + repos[repo].name + "</button></a><div class='card-text'><small class='text-muted'><span><i class='fa fa-star'></i>" + repos[repo].watchers + "</span><span><i class='fa fa-code-fork'></i>" + repos[repo].forks + "</span><span class='lang'><b>" + repos[repo].language + "</span></b></small><p class='card-text'>" + repos[repo].description + "</p>");
//                     }
//                 }
//             }
//         });
//     };
//     loadRepositories();
// });

$.ajax({
    url: "https://api.github.com/users/fvcproductions/repos?callback=?",
    dataType: "json",
    success: function(data) {
        var repos = data.data;
        if (repos.length > 1) {
            for (var repo in repos) {
                if (repos.hasOwnProperty(repo)) {
                    if (repos[repo].language === null) {
                        repos[repo].language = "";
                    }
                    $('.projects .github-projects').append("<div class='card'><a href='" + repos[repo].html_url + "' target='_blank'><button type='button' class='btn btn-primary-outline'>" + repos[repo].name + "</button></a><div class='card-text'><small class='text-muted'><span><i class='fa fa-star'></i>" + repos[repo].watchers + "</span><span><i class='fa fa-code-fork'></i>" + repos[repo].forks + "</span><span class='lang'><b>" + repos[repo].language + "</span></b></small><p class='card-text'>" + repos[repo].description + "</p>");
                }
            }
        }
    },
    error: function(request, status, error) {
        console.log(error);
    }
});

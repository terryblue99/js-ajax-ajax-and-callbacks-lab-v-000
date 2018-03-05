$(document).ready(function (){
});
// Register a partial with Handlebars when the page loads
document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});

function searchRepositories() {
  // var searchTerms = document.getElementById("searchTerms").value
  const searchTerms = $('#searchTerms').val()
  // $(document).ready(function (){
    $("#errors").empty()
    $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
      // This is executed when the url file request succeeds
      const src = document.getElementById("repository-template").innerHTML
      const template = Handlebars.compile(src)
      const repoList = template(data.items)
      $("#details").empty()
      $("#results").empty().append(repoList);
      // document.getElementById("results").innerHTML = repoList
    }).fail(function() {
      // This is called when an error occurs
      displayError("repos")
    });
  // });
}

function showCommits(userName, repo) {
  const details = "Commits"
  // $(document).ready(function (){
    $("#errors").empty()
    $.get(`https://api.github.com/repos/${userName}/${repo}/commits`, function(data) {
      // This is executed when the .html file request exists
      const src = document.getElementById("commits-template").innerHTML
      const template = Handlebars.compile(src)
      const commitList = template(data)
      $("#details").empty().append(details + " for Repository: " + repo + commitList);
    }).fail(function() {
      // This is called when an error occurs
      displayError("commits")
    });
  // });
}

function displayError(param) {
  var errorMessage = "I'm sorry, there's been an error. Please try again."
  if (param != "repos") {
      errorMessage = "I'm sorry, there's been an error. Please refresh the page and try again."
  }
  $("#errors").append(errorMessage);
}

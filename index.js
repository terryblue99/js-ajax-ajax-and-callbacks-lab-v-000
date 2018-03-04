// Register a partial with Handlebars when the page loads
document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});

function searchRepositories() {
  // const req = new XMLHttpRequest()
  var searchTerm = document.getElementById("searchTerms").value
  var url = `https://api.github.com/search/repositories?q=${searchTerm}`
  $(document).ready(function (){
    $.get(url, function(data) {
      // This is executed when the url file request succeeds
      const src = document.getElementById("repository-template").innerHTML
      const template = Handlebars.compile(src)
      const repoList = template(data.items)
      document.getElementById("results").innerHTML = repoList
    }).fail(function() {
      // This is called when an error occurs
      displayError()
    });
  });
}

function showCommits(userName, repo) {
  const details = "Commits"
  var url = `https://api.github.com/repos/${userName}/${repo}/commits`
  $(document).ready(function (){
    $.get(url, function(data) {
      // This is executed when the .html file request exists
      const src = document.getElementById("commits-template").innerHTML
      const template = Handlebars.compile(src)
      const commitList = template(data)
      $("#details").empty().append(details + " for Repository: " + repo + commitList);
    }).fail(function() {
      // This is called when an error occurs
      displayError()
    });
  });
}

function displayError() {
  var errorMessage = "I'm sorry, there's been an error. Please try again."
  document.getElementById("errors").innerHTML = errorMessage
}

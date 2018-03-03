// Register a partial with Handlebars when the page loads
document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});

function searchRepositories() {
  const req = new XMLHttpRequest()
  var searchTerm = document.getElementById("searchTerms").value
  var url = `https://api.github.com/search/repositories?q=${searchTerm}`
  $(document).ready(function (){
    $.get(url, function(data) {
      // This is called when the .html file request exists
      showRepositories(data)
    })
    .fail(function() {
      // This is called when an error occurs
      displayError()
    });
  });
}

function displayError() {
  console.log("*** displayError()")
  var errorMessage = "I'm sorry, there's been an error. Please try again."
  document.getElementById("errors").innerHTML = errorMessage
}

function showRepositories(data) {
  console.log(data)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(data.items)
  document.getElementById("results").innerHTML = repoList
}

function showCommits() {
  console.log("*** showCommits()")

}

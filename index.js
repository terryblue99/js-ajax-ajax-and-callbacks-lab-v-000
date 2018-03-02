
function searchRepositories() {
  const req = new XMLHttpRequest()
  var searchTerms = document.getElementById("searchTerms").value
  req.addEventListener("load", showRepositories);
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`
  // $(document).ready(function (){
  //   $.get(url, function(response) {
  //     // This is called when the .html file request exists
  //     showRepositories()
  //   }).fail(function() {
  //     // This is called when an error occurs
  //     displayError()
  //   });
  // });
}

function displayError() {
  var errorMessage = "I'm sorry, there's been an error. Please try again."
  document.getElementById("errors").innerHTML = errorMessage
}

function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)

}

function showCommits() {

}

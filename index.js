
function searchRepositories() {
  console.log("*** searchRepositories()")
  const req = new XMLHttpRequest()
  var searchTerms = document.getElementById("searchTerms").value
  // req.addEventListener("load", showRepositories);
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`
  $(document).ready(function (){
    console.log("*** $(document).ready(function ()")
    console.log("*** ", url)
    $.get(url, function(data) {
      console.log("*** $.get(url, function(response)")
      // This is called when the .html file request exists
      showRepositories(data)
    })
    .fail(function() {
      console.log("*** fail(function()")
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
  console.log("*** showRepositories(event, data)", data)

}

function showCommits() {
  console.log("*** showCommits()")

}

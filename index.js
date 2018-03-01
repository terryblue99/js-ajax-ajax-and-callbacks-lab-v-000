
function searchRepositories() {
  // const req = new XMLHttpRequest()
  var searchTerms = document.getElementById("searchTerms").value
  // req.addEventListener("load", showRepositories);
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`)
  $(document).ready(function (){
    $.get(url, function(response) {
      // This is called when the .html file request exists
      showRepositories()
    }).fail(function() {
      // This is called when an error occurs
      displayError()
    });
  });
}

function displayError() {
  errorMessage = "I'm sorry, there's been an error. Please try again."
  document.getElementById("error").innerHTML = errorMessage
}

function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  // We get the innerHTML of our template script tag to compile into a template
  // function that we pass our JSON response into.
  // Since we are giving the template function the entire collection of
  // repository objects, adding new fields to our template is as easy as
  // creating the markup
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}

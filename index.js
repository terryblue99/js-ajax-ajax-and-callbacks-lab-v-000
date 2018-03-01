// Register a partial with Handlebars when the page loads
document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});


function searchRepositories() {
  const req = new XMLHttpRequest()
  var searchTerms = document.getElementById("searchTerms").value;
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/search/repositories?q=${searchTerms}`)
  req.send()
  $(document).ready(function (){

  });
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

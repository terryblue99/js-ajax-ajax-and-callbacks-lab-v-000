
function searchRepositories() {
  console.log("*** searchRepositories()")
  const req = new XMLHttpRequest()
  var searchTerm = document.getElementById("searchTerms").value
  // req.addEventListener("load", showRepositories);
  var url = `https://api.github.com/search/repositories?q=${searchTerm}`
  $(document).ready(function (){
    // console.log("*** $(document).ready(function ()")
    console.log("*** ", url)
    $.get(url, function(data) {
      // console.log("*** $.get(url, function(response)")
      // This is called when the .html file request exists
      showRepositories(data)
    })
    .fail(function() {
      // console.log("*** fail(function()")
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
  var searchTerm = document.getElementById("searchTerms").value
  console.log("*** showRepositories(data)", data)
  console.log("*** repoName: ", data.items[0].name)
  console.log("*** repoDescription: ", data.items[0].description)
  console.log("*** repoURL: ", data.items[0].html_url)
  console.log("*** ownerLogin: ", data.items[0].owner.login)
  console.log("*** ownerAvatarURL: ", data.items[0].owner.avatar_url)
  console.log("*** ownerURL: ", data.items[0].owner.url)
  const repoList = `<ul>${data.items.map(r => '<li>' + r.name +
  ' - <a href="https://github.com/'+r.owner.login+'/'+ r.name +
  '" target="_blank">Show Repo</a> - <a href="#" data-repository="' + r.name +
  '" onclick="showCommits(this)">Show Commits</a></li>').join('')}</ul>`
  document.getElementById("results").innerHTML = repoList

}

function showCommits() {
  console.log("*** showCommits()")

}


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
  const repoList = `<ul>${data.items.map(r => '<li><a href="https://github.com/'+r.owner.login+'/'+ r.name +
  '" target="_blank">'+r.name+'</a> -'+r.description+' - <a href="#" data-repository="' + r.name +
  '" onclick="showCommits(this)">Show Commits</a></li>' +
  '<p>'+r.owner.login + ' ' + r.owner.url+'</p>' +
  '<p><img src="'+r.owner.avatar_url+'" height="32" width="32"></p>').join('')}</ul>`
  document.getElementById("results").innerHTML = repoList

}

function showCommits() {
  console.log("*** showCommits()")

}

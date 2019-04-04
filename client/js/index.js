function fetchRepos() {
  $.ajax({
    url: 'http://localhost:3000/users',
    method: 'GET'
  })
    .done((response) => {
      for(repo of response) {
        $('#repos').append(`<li class="list-group-item">${repo.name}</li>`)
      }
    })
    .fail((jqXHR, textStatus) => {
      console.log('request failed =>', textStatus);
    })
}

function createRepo() {
  event.preventDefault();
  const repoName = $('#repoName').val();

  $.ajax({
    url: 'http://localhost:3000/users',
    method: 'POST',
    data: { repoName }
  })
    .done((response) => {
      $('#repos').prepend(`<li class="list-group-item">${response.name}</li>`)
    })
    .fail((jqXHR, textStatus) => {
      console.log('request failed =>', textStatus);
    })
}

$(document).ready(function() {
  fetchRepos();

  $('#repo-form').submit(function() {
    createRepo();
  })
})
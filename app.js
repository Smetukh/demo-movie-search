(function() {
    'use strict';
    var App = {};
    App.prototype = {
      init: function() {
        document.addEventListener('searchMovies', function (e) {
          var queryString = encodeURIComponent(e.detail);
          console.log('e.detail = ', e.detail)
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=81cfc9e7f03740911f7568ce112347b3&language=en-US&query=${queryString}&page=1&include_adult=false`)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            SearchResults.populate();
            SearchResults.populate(data.results);
          })
        }, false);
      }
    }
    App.prototype.init();
  }());

  function initFunction() {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=81cfc9e7f03740911f7568ce112347b3`)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            SearchResults.populate();
            SearchResults.populate(data.results);
          })
  }
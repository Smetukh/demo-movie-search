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
            console.log(JSON.stringify(data));
            console.log('##########################');
            console.log(data);
            SearchResults.populate();
            console.log('json = ')
            SearchResults.populate(data.results);
          })
        }, false);
      }
    }

    var onMoviesError = function(error) {
      console.log(error);
    };
  
    App.prototype.init();
  }());
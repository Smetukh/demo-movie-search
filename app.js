(function() {
    'use strict';
    var App = {};
    App.prototype = {
      init: function() {
        document.addEventListener('searchMovies', function (e) {
          var queryString = encodeURIComponent(e.detail);
          theMovieDb.search.getMovie({"query":queryString}, onMoviesRetrieved, onMoviesError);
        }, false);
      }
    }
  
    var onMoviesRetrieved = function(data) {
      SearchResults.populate();
      var json = JSON.parse(data);
      SearchResults.populate(json.results);
    };
  
    var onMoviesError = function(error) {
      console.log(error);
    };
  
    App.prototype.init();
  }());
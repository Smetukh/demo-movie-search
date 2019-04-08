'use strict';
let SearchResults = {};
SearchResults.populate = function(data) {
    let list = document.getElementById('results');
    let output = document.getElementById('output');
    list.style.display = 'block';
    output.style.display = 'none';
    if(data === undefined) {
      list.innerHTML = '';
      return;
    }

    let listItem;
    data.map(function(item) {
      listItem = document.createElement('li');
      let anchor = document.createElement('a');
      anchor.href = '#';
      anchor.innerHTML = item.title;
      anchor.onclick = movieInfoHandler;
      anchor.setAttribute('movie-data', JSON.stringify(item));
      listItem.appendChild(anchor); 
      list.appendChild(listItem);
    })

    function movieInfoHandler() {
      

      let element = document.getElementById("output");
      let trending = document.getElementById('trending');
      trending.style.display = "none";
      element.innerHTML = ''
      let item = JSON.parse(this.getAttribute('movie-data'));
      list.style.display = 'none';
      output.style.display = 'block';

      // fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=81cfc9e7f03740911f7568ce112347b3&language=en-US`)
      //     .then(function(response) {
      //       return response.json();
      //     })
      //     .then(function(data) {
      //       console.log(JSON.stringify(data));
      //       console.log('##########################');
      //       console.log(data);
      //       SearchResults.populate();
      //       console.log('json = ')
      //       SearchResults.populate(data.results);
      //     })


      
      let picture = document.createElement("IMG");
      picture.setAttribute("src", item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg');
      picture.setAttribute("width", "20%");
      picture.setAttribute("height", "20%");
      picture.setAttribute("alt", `${item.title} poster`);

      let description = document.createElement("p");
      description.style.width = "30%"
      let node = document.createTextNode(`${item.overview}` || 'No description available.');
      let span = document.createElement('span');
      let recommendations = document.createTextNode('Recommendations:');
      span.style.fontWeight = "bold";
      span.appendChild(recommendations);
      description.appendChild(node);
      


      
      element.appendChild(picture);
      element.appendChild(description);      
      element.appendChild(span);      
      console.log(item);
     }
}
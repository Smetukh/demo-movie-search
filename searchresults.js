'use strict';
let SearchResults = {};
//output search result
SearchResults.populate = function(data) {
    let list = document.getElementById('results');
    let output = document.getElementById('output');
    list.style.display = 'block';
    output.style.display = 'none';
    if(data === undefined) {
        list.innerHTML = '';
        return;
    }
    let anchor;
    let listItem;
    data.map(function(item) {
        listItem = document.createElement('li');
        anchor = document.createElement('a');
        anchor.href = '#';
        anchor.innerHTML = item.title;
        anchor.onclick = clickHandler;
        anchor.setAttribute('movie-data', JSON.stringify(item));
        listItem.appendChild(anchor); 
        list.appendChild(listItem);
    })
    //render movie info on click
    function clickHandler() {
        let element = document.getElementById("output");
        let trending = document.getElementById('trending');
        trending.style.display = "none";
        element.innerHTML = ''
        let item = JSON.parse(this.getAttribute('movie-data'));
        list.style.display = 'none';
        output.style.display = 'block';

        let picture = document.createElement("IMG");
        picture.setAttribute("src", 
            item.poster_path 
            ? 
            `https://image.tmdb.org/t/p/w500${item.poster_path}` 
            : 
            'https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg');
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
        
        //fetch recommended movies
        fetch(`https://api.themoviedb.org/3/movie/${item.id}/recommendations?api_key=81cfc9e7f03740911f7568ce112347b3`)
            .then(function(response) {
                return response.json();
            })
            .then(function(recommendations) {
                if (recommendations && recommendations.results && recommendations.results.length) {
                element.appendChild(span);
                let recommendList = document.createElement('ul');
                
                for (let i = 0; i < 3; i++) {
                    if (recommendations.results[i]) {
                    let recommendListItem = document.createElement('li');
                    anchor = document.createElement('a');
                    anchor.href = '#';
                    anchor.innerHTML = recommendations.results[i].title;
                    anchor.onclick = clickHandler;
                    anchor.setAttribute('movie-data', JSON.stringify(recommendations.results[i]));
                    recommendListItem.appendChild(anchor); 
                    recommendList.appendChild(recommendListItem);
                    } else {
                    break;
                    }           
                } 
                element.appendChild(recommendList);
                }
            })             
    }
}
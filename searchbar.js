(function() {
    'use strict';
    let SearchBar = {};
    SearchBar.prototype = {
        init: function() {
            let searchbar = document.getElementById('search-bar');
            searchbar.focus();
            let button = document.getElementById('search-button');
            button.addEventListener('click', this.onclick.bind(this));
        },
        onclick: function() {
            this.dispatchValue();
        },
        dispatchValue: function() {
            let searchvalue = document.getElementById('search-value');
            let trending = document.getElementById('trending');
            trending.style.display = "none";
    
            if(searchvalue.value === '') return; 
            let moviePayloadEvent = new CustomEvent('searchMovies', { 'detail': searchvalue.value });
            document.dispatchEvent(moviePayloadEvent);
        }
    }
    SearchBar.prototype.init();
}());
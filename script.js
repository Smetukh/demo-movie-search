var searchbar = document.getElementById('search-bar');
var button = document.getElementById('search-button');
button.addEventListener('click', this.onclick.bind(this));
onclick: function () {
    this.dispatchValue();
}
dispatchValue: function() {
var searchvalue = document.getElementById('search-value');

if(searchvalue.value === '') return; 
var moviePayloadEvent = new CustomEvent('searchMovies', { 'detail': searchvalue.value });
document.dispatchEvent(moviePayloadEvent);
}
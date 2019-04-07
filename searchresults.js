'use strict';
var SearchResults = {};
SearchResults.populate = function(data) {
    var list = document.getElementById('results');
    if(data === undefined) {
      list.innerHTML = '';
      return;
    }

    var tempListItem;
    data.map(function(item) {
      tempListItem = document.createElement('li');
      tempListItem.appendChild(document.createTextNode(item.title));
      list.appendChild(tempListItem);
    })
}
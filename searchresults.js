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
      anchor.onclick = clickHandler;
      anchor.setAttribute('movie-data', JSON.stringify(item));
      listItem.appendChild(anchor); //document.createTextNode(item.title));
      list.appendChild(listItem);
      //tempListItem.onclick = loadScript;
      // document.body.appendChild(tempListItem);
    })

    function clickHandler() {
      let itemInfo;
      list.style.display = 'none';
      output.style.display = 'block';
      let para = document.createElement("p");
      let node = document.createTextNode("This is new.");
      para.appendChild(node);

      let element = document.getElementById("output");
      element.appendChild(para);
      let item = JSON.parse(this.getAttribute('movie-data'));
      console.log(item);
     }
}
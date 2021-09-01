// search data load
const search = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.nodeValue;

    const url = `http://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));



}
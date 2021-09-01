// search data load
const search = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    const url = `http://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showData(data));

}

showData = datas => {
    console.log(datas);
    console.log(datas.numFound);

    const books = datas.docs.slice(0, 5);
    books.forEach(book => {
        console.log(book);

        const details = book.text;
        console.log(details[1]);
        // details.forEach(detail => {
        //     console.log(detail.title);
        // });


    });


}
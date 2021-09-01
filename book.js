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
    // console.log(datas);
    console.log(datas.numFound);

    const books = datas.docs.slice(0, 5);
    books.forEach(book => {
        console.log(book);
        console.log(...book.author_name);

        console.log(...book.publisher);
        console.log(book.title);

        if (book.hasOwnProperty('publish_date')) {
            console.log('yes');
            const publish = book.publish_date;
            const fp = publish.slice(-1);
            console.log(...fp);
        }



        const authors = book.author_name;
        authors.forEach(author => {
            const aname = author + ',';
            console.log(aname);
        });


    });


}
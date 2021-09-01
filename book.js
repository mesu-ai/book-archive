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
        console.log(book.title);
        console.log(...book.author_name);
        console.log(...book.publisher);

        // if (book.hasOwnProperty('publish_date')) {
        //     console.log('yes');
        //     const publish = book.publish_date;
        //     const fp = publish.slice(-1);
        //     console.log(...fp);
        //     return fp;
        // }

        // const authors = book.author_name;
        // authors.forEach(author => {
        //     const aname = author + ',';
        //     console.log(aname);
        // });


        const searchResult = document.getElementById('data-show');

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card text-center rounded-3 shadow-lg card-design ">
                <img class="card-img-top" src="" alt="">
                <div class="card-body">

                    <h5 class="card-title"> Book Name: ${book.title}</h5>
                    <p> Author Name: <i>${book.author_name} </i > </ >
                    <p>Publisher Name: <i>${book.publisher}</i></p>
                    <p class="card-text">First Publish:</p>
                </div >
            </div >

    `;

        searchResult.appendChild(div);

    });


}
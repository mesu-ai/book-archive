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


        const firstPublish = () => {
            if (book.hasOwnProperty('publish_date')) {
                const dates = book.publish_date;

                const date = dates[dates.length - 1];
                return date;

                // return date.slice(-1);
            }
        }

        document.getElementById('main-body').style.padding = '25px'
        const searchResult = document.getElementById('data-show');

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 text-center rounded-3 shadow-lg card-design ">
                <img class="card-img-top" src="" alt="">
                <div class="card-body">

                    <h5 class="card-title"> Book Name: ${book.title}</h5>
                    <p> Author Name: <i>${book.author_name} </i > </ >
                    <p>Publisher Name: <i>${book.publisher}</i></p>
                    <p class="card-text">First Publish: ${firstPublish()}</p>
                </div >
            </div >

    `;

        searchResult.appendChild(div);

    });


}
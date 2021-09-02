// search data load
const search = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showData(data));

}

showData = datas => {

    // console.log(datas);
    console.log(datas.numFound);
    const status = document.getElementById('status-bar');
    status.style.padding = '20px';
    status.innerText = `Total Result Found: ${datas.numFound}`;

    const searchResult = document.getElementById('data-show');
    searchResult.textContent = '';

    const books = datas.docs.slice(0, 10);
    books.forEach(book => {
        console.log(book);

        console.log('cover:', book.cover_i);
        console.log('name:', book.title);
        console.log('author:', ...book.author_name);
        console.log('publisher:', ...book.publisher);

        const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

        // const firstPublish = () => {
        //     if (book.hasOwnProperty('publish_date')) {
        //         const dates = book.publish_date;

        //         const date = dates[dates.length - 1];
        //         return date;

        //         // return date.slice(-1);
        //     }
        // }


        document.getElementById('search-container').style.padding = '25px'



        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 text-center rounded-3 shadow-lg card-design p-3">
                <img class="bg-opacity-50 w-75 p-2 bg-white mx-auto card-img-top " src="${coverUrl}" alt="" height="220">
                <div class="card-body">

                    <h5 class="card-title"><span> Book Name:</span> ${book.title}</h5>
                    <p> <span>Author Name:</span><i> ${book.author_name} </i > </ >
                    <p> <span>Publisher Name:</span> <i>${book.publisher}</i></p>
                    <p class="card-text"><span>First Publish:</span> ${book.first_publish_year}</p>
                </div >
            </div >

    `;

        searchResult.appendChild(div);

    });


}
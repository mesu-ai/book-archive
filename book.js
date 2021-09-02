const clearResult = () => {
    const searchResult = document.getElementById('data-show');
    searchResult.textContent = '';
    document.getElementById('search-container').style.padding = '0px';
}

// status massage bar
const statusUpdate = (massage, color) => {
    const status = document.getElementById('status-bar');
    status.style.padding = '20px';
    status.style.color = color;
    status.innerText = massage;
}


// search data load
const search = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clear search box
    searchField.value = '';

    // check input data
    if (searchText == '') {

        // clear search result
        clearResult();

        // update massage
        statusUpdate('Please Enter The Search Box !', 'red')


    } else {

        // data load
        const url = `https://openlibrary.org/search.json?q=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => showData(data));

    }


}


// show search result
showData = datas => {

    statusUpdate(`Total Books Found: ${datas.numFound}`, 'green');

    const searchResult = document.getElementById('data-show');
    searchResult.textContent = '';


    // take 1st 20 search result
    const books = datas.docs.slice(0, 20);
    books.forEach(book => {

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

        // create a div and show search result
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 p-3 text-center rounded-3 shadow-lg card-design">
                <img class="bg-opacity-100 w-75 p-2 bg-white mx-auto card-img-top " src="${coverUrl}" alt="" height="220">
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
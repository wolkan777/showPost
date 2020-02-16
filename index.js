const list = document.getElementById('list');
const titleDetail = document.getElementById('title-detail');
const content = document.getElementById('content');

const repetition = "Push the post titles from left box and see the details"

content.textContent = repetition.repeat(25);

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(function (elements) {
            elements.forEach(element => {
                list.innerHTML += `
            <li ><a class='title' id="${element.id}" href="#">${element.title}</a> </li>
            `
            });
        })


function getPost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(function (element) {
            content.textContent = element.body;
        })
}


document.getElementById('list').addEventListener('click', function (e) {
    if (e.target.className === 'title') {
        titleDetail.textContent = e.target.textContent;
        getPost(e.target.id)

    }

})



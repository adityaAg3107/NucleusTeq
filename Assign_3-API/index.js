const postss = document.getElementById('posts');

const fetchPosts = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
        });

        const posts = await response.json();

        return posts;

    } catch (error) {
        console.log(error);
    }
}

const display = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    const posts = await fetchPosts(url);

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post-card');

        const title = document.createElement('h2');
        const description = document.createElement('p');

        title.textContent = post.title;
        description.textContent = post.body;

        postElement.appendChild(title);
        postElement.appendChild(description);

        postss.appendChild(postElement);

    });
}

display();

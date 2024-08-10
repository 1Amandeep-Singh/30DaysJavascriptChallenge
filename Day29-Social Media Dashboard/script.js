"use strict";
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        // Store user info in localStorage
        localStorage.setItem('username', username);
        
        // Redirect to posts section or display posts
        document.getElementById('login').style.display = 'none';
        document.getElementById('posts').style.display = 'block';
    }
});
const posts = [];

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const postText = document.getElementById('post-text').value;
    const postImage = document.getElementById('post-image').value;
    const username = localStorage.getItem('username');
    
    const newPost = {
        text: postText,
        image: postImage,
        username: username,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
    };

    posts.push(newPost);
    displayPosts();
    
    // Clear form fields
    document.getElementById('post-text').value = '';
    document.getElementById('post-image').value = '';
});

function displayPosts() {
    const postFeed = document.querySelector('.post-feed');
    postFeed.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        postElement.innerHTML = `
            <p><strong>${post.username}</strong> <small>${post.timestamp}</small></p>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <p>Likes: ${post.likes} | Comments: ${post.comments.length}</p>
            <button class="like-button">Like</button>
            <button class="comment-button">Comment</button>
        `;
        
        postFeed.appendChild(postElement);
    });
}
document.querySelector('.post-feed').addEventListener('click', function(event) {
    if (event.target.classList.contains('like-button')) {
        const postIndex = Array.from(event.target.closest('.post').parentNode.children).indexOf(event.target.closest('.post'));
        posts[postIndex].likes++;
        displayPosts();
    } else if (event.target.classList.contains('comment-button')) {
        const postIndex = Array.from(event.target.closest('.post').parentNode.children).indexOf(event.target.closest('.post'));
        const comment = prompt('Enter your comment:');
        if (comment) {
            posts[postIndex].comments.push(comment);
            displayPosts();
        }
    }
});
function displayPosts() {
    const postFeed = document.querySelector('.post-feed');
    postFeed.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        if (post.username === localStorage.getItem('username')) {
            postElement.classList.add('me');
        }
        
        postElement.innerHTML = `
            <p><strong>${post.username}</strong> <small>${post.timestamp}</small></p>
            <p>${post.text}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <p>Likes: ${post.likes} | Comments: ${post.comments.length}</p>
            <button class="like-button">Like</button>
            <button class="comment-button">Comment</button>
        `;
        
        postFeed.appendChild(postElement);
    });
}

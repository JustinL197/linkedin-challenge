userProfile = {
    username: "Justin Lee",
    profilePicture: "./assets/images/man.png",
    jobTitle: "Software Engineer"
};

function loadUserProfile(){
    const profilePictureElem = document.querySelectorAll('.data-profile-image');

    for (let pro of profilePictureElem){
        pro.src = userProfile.profilePicture;
    }

    const usernameElem = document.querySelectorAll('.data-username');
    const jobTitleElem = document.querySelector('.data-job-title');

    for (let el of usernameElem){
        el.innerHTML = userProfile.username;
    }

    jobTitleElem.innerHTML = userProfile.jobTitle;
    
}
window.onload = loadUserProfile;


function createPost(){
    const parentDiv = document.querySelector(".posts");

    const username = document.querySelector(".data-username").innerHTML;
    const userInput = document.querySelector(".post-input").value;

    if (userInput){
        const postItemDiv = document.createElement('div');
        postItemDiv.classList.add('posts__item');
    
        const postUsernameDiv = document.createElement('div');
        postUsernameDiv.classList.add('posts__username');
        postUsernameDiv.innerText = username + " Posted";
    
        const postContentDiv = document.createElement('div');
        postContentDiv.classList.add('posts__content');
        const postContent = document.createElement('p');
        
        postContent.innerText = userInput;
        postContentDiv.append(postContent);
        
        const postLikeDiv = document.createElement('div');
        postLikeDiv.classList.add('posts__like');
    
        postItemDiv.append(postUsernameDiv);
        postItemDiv.append(postContentDiv);
        postItemDiv.append(postLikeDiv);
    
    
        parentDiv.prepend(postItemDiv);
    } else{
        alert("Error: You have empty Post")
    }
}

document.querySelector('.start-post-button').addEventListener('click', createPost);    
const POST_TITLE = "Beautiful Sunset"; 
let likeCount = 0;  
let commentCount = 0;  

function likePost() {
    likeCount++
    console.log("Post liked! Total likes: " + likeCount)
}

function commentPost() {
    commentCount++
    console.log("Comment added! Total comments: " + commentCount)
}

likePost();
likePost();
commentPost();


//Instagram story timer

const STORY_DURATION = 15;  
let timeRemaining = STORY_DURATION;

function playStory() {
    timeRemaining--
    if(0 < timeRemaining){
        console.log("Story playing..." + timeRemaining + "seconds remaing")
    }else{
        console.log("Story ended!")
    }
}
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()
playStory()


// User profile manager

 const USER_NAME = 'Srikanth'
 let bio = 'Love coding'
 let followerCount = 300;

 function updateBio(newBio) {
    bio = newBio;
    
}

function addFollower() {
    followerCount++;
    
}

function showProfile() {
    console.log('User new Bio is: ' + bio)
    console.log('User increased followers:' + followerCount)
}


updateBio("I love coding and fitness")
addFollower()
addFollower();
addFollower();
showProfile();


// Build instagram post manager

const APP_NAME = "MyInstagram";
const MAX_CAPTION_LENGTH = 200;
const MAX_HASHTAGS = 30;
let postCount = 0;
let totalLikes = 0;
let totalComments = 0;
function createPost(caption) {
    if(caption.length >= MAX_CAPTION_LENGTH){
        postCount++
        console.log('Post created successfully! Total posts: ' + postCount)
    }
}
function likePost(postId) {
    totalLikes++
    console.log('Post '+ postId+' liked! Total likes: '+ totalLikes)
}
function commentOnPost(postId, comment) {
    totalComments++;
    console.log('Comment added to post '+ postId +':'+ comment)
}
function showStatistics() {
    console.log('Total Posts: ' + postCount)
    console.log('Total Likes:' + totalLikes)
    console.log('Total Comments: '+ totalComments)
    console.log('Average Likes per Post:'+ totalLikes)
}
createPost("Beautiful sunset at the beach! sunset beach");
likePost(1);
likePost(1);
likePost(1);
commentOnPost(1, "Amazing photo!");
commentOnPost(1, "Love this!");
showStatistics();
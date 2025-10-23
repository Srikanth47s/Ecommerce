let followers = ["john_doe", "jane_smith", "bob_wilson", "alice_wonder", "charlie_brown"];

// Task 1: Show total followers count
console.log(followers.length)

// Task 2: Show all followers with numbering
for(let i=0; i<followers.length; i++){
    console.log(followers[i])
}


// Task 3: Check if "bob_wilson" is following you
for(let i=0; i<followers.length; i++){
    if(followers[i] == 'bob_wilson'){
        console.log(followers[i], 'is followed')
    }else{
        console.log('bob_wilson is not followed')
    }
}

// Task 4: Add new follower "david_jones"
followers.push("david_jones")
console.log(followers)

// Task 5: Show updated follower count
console.log(followers.length)


// Given data:
let posts = [
    { id: 1, likes: 100, comments: 20 },
    { id: 2, likes: 150, comments: 30 },
    { id: 3, likes: 200, comments: 25 },
    { id: 4, likes: 120, comments: 15 },
    { id: 5, likes: 180, comments: 35 }
];

// Task 1: Calculate total likes across all posts
let totaLikes = 0;
for(let i=0; i<posts.length; i++){
    totaLikes += posts[i].likes 
}
console.log(totaLikes)

// Task 2: Calculate total comments across all posts
let totalComments = 0;
for(let i=0; i<posts.length; i++){
    totalComments += posts[i].comments 
}
console.log(totalComments)

// Task 3: Calculate total engagement (likes + comments)
console.log(totaLikes + totalComments)

// Task 4: Find post with highest likes
let highestLikes = posts[0]
for(let i = 1 ; i<posts.length; i++){
    if(highestLikes.likes<posts[i].likes){
        highestLikes = posts[i]
    }
}
console.log(highestLikes)

// Task 5: Calculate average likes per post
totalLikesValue = 0
for(let i = 1 ; i<posts.length; i++){
    totalLikesValue += posts[i].likes
}
let avg = totalLikesValue/posts.length
console.log('avarage likes per post is: ',avg)


// Create a user profile display system.

// Tasks:


// Given data:
let users = [
    { username: "john_doe", followers: 1000, posts: 50, isVerified: false },
    { username: "jane_smith", followers: 2000, posts: 100, isVerified: true },
    { username: "bob_wilson", followers: 500, posts: 30, isVerified: false },
    { username: "alice_wonder", followers: 3000, posts: 150, isVerified: true }
];

for(let i =0; i<users.length; i++){
    console.log('Username is: ',users[i].username)
}

// Task 2: Count verified users
let verifiedAccounts = []
for(let i =0; i<users.length; i++){
    if(users[i].isVerified == true){
        verifiedAccounts.push(users[i])
    }
}
console.log('verified accounts count : ', verifiedAccounts.length)

// Task 3: Find user with most followers
mostFollowers = users[0];
for(let i =1; i<users.length; i++){
   if(mostFollowers.followers<users[i].followers){
    mostFollowers = users[i]
   }
}
console.log('Most follower user is: ',mostFollowers)


// Task 4: Calculate total posts by all users
let totalPosts = 0;
for(let i=0; i<users.length; i++){
    totalPosts += users[i].posts
}
console.log('total posts : ', totalPosts)


// Task 5: Show users with verification status
for(let i =0; i<users.length; i++){
    if(users[i].isVerified == true){
        console.log(users[i].username, ' - Verified')
    }else{
        console.log(users[i].username, ' - Not Verified')
    }
}




// Problem:
// Build a story viewing system.
// Tasks:

// Given data:
let stories = [
    { author: "john_doe", image: "story1.jpg", views: 500, expiresIn: 20 },
    { author: "jane_smith", image: "story2.jpg", views: 800, expiresIn: 15 },
    { author: "bob_wilson", image: "story3.jpg", views: 300, expiresIn: 22 },
    { author: "alice_wonder", image: "story4.jpg", views: 600, expiresIn: 10 }
];

// Task 1: Show total stories available
for(let i=0; i<stories.length; i++){
    console.log(stories[i])
}

// Task 2: Display all story authors
for(let i=0; i<stories.length; i++){
    console.log(`Story author, ${stories[i].author}`)
}

// Task 3: Find total views across all stories
let totalViews = 0;
for(let i=0; i<stories.length; i++){
    totalViews += stories[i].views
}
console.log('Total views',totalViews)

// Task 4: Find stories expiring in less than 15 hours
for(let i=0; i<stories.length; i++){
    if(stories[i].expiresIn < 15){
        console.log('Story expire less than 15 : ',stories[i])
    }
}

// Task 5: Display story details
for(let i=0; i<stories.length; i++){
    console.log('story by',stories[i].author);
    console.log('views:',stories[i].views);
    console.log('Expires in:',stories[i].expiresIn)
}


// Problem:
// Build a comment management system.
// Tasks:
// Given data:
let comments = [
    "Great photo!",
    "Love this!",
    "Amazing shot! 📸",
    "Beautiful!",
    "Wow! 😍",
    "Nice!",
    "Incredible!",
    "Stunning view!"
];

// Task 1: Show total comments
for(let i=0; i<comments.length; i++){
    console.log(comments[i])
}

// Task 2: Display all comments with numbering
for(let i=0; i<comments.length; i++){
    console.log(i+1,comments[i])
}

// Task 3: Show first 3 comments only
console.log('Fisrt 3 comments:',comments.slice(0,3))

// Task 4: Show last 2 comments
console.log('Last 2 comments:',comments.slice(-2))

// Task 5: Check if comment "Nice!" exists
console.log(comments.includes("Nice!"))

// Task 6: Add new comment "Awesome!"
comments.push('Awesome!');
console.log('After adding value:',comments)

// Task 7: Show updated comment count
console.log('Updated comment count:',comments.length)



// Create a search system for finding users.
// Tasks:
// Given data:
let allUsers = [
    { username: "john_doe", fullName: "John Doe" },
    { username: "jane_smith", fullName: "Jane Smith" },
    { username: "bob_wilson", fullName: "Bob Wilson" },
    { username: "alice_wonder", fullName: "Alice Wonder" },
    { username: "charlie_brown", fullName: "Charlie Brown" }
];

// Task 1: Search for user "bob_wilson"
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i].username.includes("bob")){
        console.log('User name is exist:',allUsers[i])
    }
}


// Task 2: Count users with "john" in username
let count = 0;
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i].username.includes("john")){
        count++;
    }
}
console.log('Total count of Jhon username is:',count)


// Task 3: Find all usernames containing "smith"
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i].username.includes("smith")){
        console.log('Username with Smith:',allUsers[i])
    }
}


// Task 4: Check if username "test_user" exists

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i].username.includes("srikanth")){
        console.log('Username with Smith:',allUsers[i])
    }else{
        console.log('doesnot exist')
    }
}

// Task 5: Display all full names
for(let i=0; i<allUsers.length; i++){
        console.log('Full name:',allUsers[i].fullName)
    
}




// Problem:
// Build a like counting system.
// Tasks:
// Given data:
let postsWithLikes = [
    { id: "POST_1", likes: ["user1", "user2", "user3"] },
    { id: "POST_2", likes: ["user1", "user4", "user5", "user6"] },
    { id: "POST_3", likes: ["user2", "user3"] },
    { id: "POST_4", likes: ["user1", "user2", "user4", "user5", "user7"] }
];

// Task 1: Show total likes for each post
for(let i=0; i<postsWithLikes.length; i++){
    console.log('Total likes for each post',postsWithLikes[i].likes.length)
}

// Task 2: Find post with most likes
let highestLikePost = postsWithLikes[0]
for(let i=1; i<postsWithLikes.length; i++){
    if(highestLikePost.likes.length < postsWithLikes[i].likes.length){
        highestLikePost = postsWithLikes[i]
    }
}
console.log('Heighst likes post is:',highestLikePost)


// Task 3: Count how many posts "user1" liked
let countLikePost = 0
for(let i=0; i<postsWithLikes.length; i++){
   if(postsWithLikes[i].likes.includes("user1")){
    countLikePost++;
   }
}
console.log('Total count of user1 liked:',countLikePost);

// Task 4: Calculate total likes across all posts
let totalLikeAllPosts = 0;
for(let i=0; i<postsWithLikes.length; i++){
   totalLikeAllPosts += postsWithLikes[i].likes.length
}
console.log('Total posts likes:',totalLikeAllPosts)


// Task 5: Check if "user3" liked "POST_2"
let postSlice = postsWithLikes.slice(1,2)
for(let i=0; i<postSlice.length; i++){
    if(postSlice[i].likes.includes('user3')){
        console.log('user liked post',postSlice[i])
    }else{
         console.log('user doesnt like the post',postSlice[i])
    }
}




// Challenge 7.1: Analytics Dashboard
// Problem:
// Create a complete Instagram analytics dashboard.


// Given data:
let accountData = {
    username: "john_doe",
    posts: [
        { id: 1, likes: 150, comments: 25, shares: 10 },
        { id: 2, likes: 200, comments: 30, shares: 15 },
        { id: 3, likes: 180, comments: 20, shares: 12 },
        { id: 4, likes: 220, comments: 35, shares: 18 },
        { id: 5, likes: 190, comments: 28, shares: 14 }
    ],
    followers: 5000,
    following: 1000
};

// Tasks:

// 1. Calculate total engagement (likes + comments + shares)
let totalEngagement = 0
for(let i=0; i<accountData.posts.length; i++){
    totalEngagement += accountData.posts[i].likes + accountData.posts[i].comments + accountData.posts[i].shares
}
console.log(totalEngagement)

// 2. Calculate average engagement per post
let avarageEngagementPerPost = totalEngagement/accountData.posts.length
console.log('Avarage engagement per post is:',avarageEngagementPerPost)

// 3. Find best performing post
let bestPerformimgPost = accountData.posts[0]

for(let i=1; i<accountData.posts.length; i++){
    if(bestPerformimgPost.likes < accountData.posts[i].likes && bestPerformimgPost.comments < accountData.posts[i].comments && bestPerformimgPost.shares < accountData.posts[i].shares) {
       bestPerformimgPost = accountData.posts[i]
    }  
}
console.log('Best performing post is:',bestPerformimgPost)

// 4. Calculate engagement rate (total engagement / followers * 100)

let engagementRate = totalEngagement/accountData.followers * 100
console.log(engagementRate)

// 5. Display complete analytics report

let totalLikesOfPost = 0;
let totalCommentsOfPost = 0;
let totalShareOfPost = 0

console.log('--------Instagram Analytics Dashboard-------')
console.log(`Username: ${accountData.username}`)
console.log(`Total Posrts: ${accountData.posts.length}`)
console.log(`Followers: ${accountData.followers}`)
console.log(`Followong ${accountData.following}`)
for(let i=0; i<accountData.posts.length; i++){
    totalLikesOfPost += accountData.posts[i].likes
    totalCommentsOfPost += accountData.posts[i].comments
    totalShareOfPost += accountData.posts[i].shares
}
console.log(`Post performance:`)
console.log(`Total likes: ${totalLikesOfPost}`)
console.log(`Total Comments: ${totalCommentsOfPost}`)
console.log(`Total Sharess: ${totalShareOfPost}`)
console.log(`Total Engagement: ${totalEngagement}`)

let likeAvarage = totalLikesOfPost/accountData.posts.length;
let commentsAvarage = totalCommentsOfPost/accountData.posts.length;
let sharesAvarage = totalShareOfPost/accountData.posts.length;

console.log(`Averages:`)
console.log(`Avg Likes per Post: ${likeAvarage}`)
console.log(`Avg Comments per Post: ${commentsAvarage}`)
console.log(`Avg Shares per Post: ${sharesAvarage}`)


console.log(`Best Performing Post: ${bestPerformimgPost.id}`)
console.log(`Likes: ${bestPerformimgPost.likes}`)
console.log(`Shares: ${bestPerformimgPost.comments}`)
console.log(`Shares: ${bestPerformimgPost.shares}`)

console.log(`Overall Engagement Rate: ${engagementRate}`)



// Problem:
// Track follower growth over time.
// Given data
// Tasks:
let followersHistory = [
  { date: "2024-01-01", count: 1000 },
  { date: "2024-01-02", count: 1050 },
  { date: "2024-01-03", count: 1100 },
  { date: "2024-01-04", count: 1080 },
  { date: "2024-01-05", count: 1150 },
  { date: "2024-01-06", count: 1200 },
  { date: "2024-01-07", count: 1250 }
];


// 1. Calculate total growth (last day - first day)
let totalGrowth = followersHistory[followersHistory.length - 1].count - followersHistory[0].count;
console.log("Total Growth:", totalGrowth);


// 2. Average Daily Growth

let totalDailyGrowth = 0;
for (let i = 0; i < followersHistory.length; i++) {
  totalDailyGrowth += followersHistory[i].count;
}
let avgGrowth = totalDailyGrowth / followersHistory.length;
console.log(" Average Daily Growth:", avgGrowth);


// 3. Day with Highest Growth

let highestGrowth = followersHistory[0];

for (let i = 1; i < followersHistory.length; i++) {
  if (followersHistory[i].count  > highestGrowth.count) {
    highestGrowth = followersHistory[i];
  }
}
console.log("Highest Growth:", highestGrowth.count, "on", highestGrowth.date);



// Problem:
// Analyze which type of content performs best.
// Given data:
let contentPosts = [
    { type: "photo", likes: 150, comments: 20 },
    { type: "video", likes: 300, comments: 45 },
    { type: "photo", likes: 180, comments: 25 },
    { type: "carousel", likes: 220, comments: 30 },
    { type: "video", likes: 350, comments: 50 },
    { type: "photo", likes: 160, comments: 22 },
    { type: "carousel", likes: 240, comments: 35 },
    { type: "video", likes: 380, comments: 55 }
];

// Tasks:
// 1. Count total posts by type
let totalPhotos = [];
let totalVideos = [];
let totalCarousel = [];

for(let i=0; i<contentPosts.length; i++){
    if(contentPosts[i].type == 'photo'){
        totalPhotos.push(contentPosts[i])
    }else if(contentPosts[i].type =='video'){
        totalVideos.push(contentPosts[i])
    }else{
        totalCarousel.push(contentPosts[i])
    }
}

let totalPhotosLikes = 0
let totalPhotoComments = 0 
let photoBestContent = totalPhotos[0]
for(let i=0; i<totalPhotos.length; i++){
      totalPhotosLikes += totalPhotos[i].likes
      totalPhotoComments += totalPhotos[i].comments
      if(photoBestContent.likes <= totalPhotos[i].likes && photoBestContent.comments <= totalPhotos[i].comments){
        photoBestContent = totalPhotos[i]
      }
}
let avgTotalLikes = totalPhotosLikes/totalPhotos.length
let avgTotalComents = totalPhotoComments/totalPhotos.length

console.log('Photo Posts:')
console.log('Total',totalPhotos.length)
console.log('Avg Likes:',avgTotalLikes)
console.log('Avg Comments:',avgTotalComents)


// ---------------------------------------------------------------------------------------------------------------------

let totalVideosLikes = 0
let totalVideosComments = 0 
let videosBestContent = totalVideos[0]
for(let i=0; i<totalVideos.length; i++){
      totalVideosLikes += totalVideos[i].likes
      totalVideosComments += totalVideos[i].comments
      if(videosBestContent.likes <= totalVideos[i].likes && videosBestContent.comments <= totalVideos[i].comments){
        videosBestContent = totalVideos[i]
      }
}
let avgTotalLikes1 = totalVideosLikes/totalVideos.length
let avgTotalComents1 = totalVideosComments/totalVideos.length

console.log('Video Posts:')
console.log('Total',totalVideos.length)
console.log('Avg Likes:',avgTotalLikes1)
console.log('Avg Comments:',avgTotalComents1)


// ------------------------------------------------------------------


let totalCarouselLikes = 0
let totalCarouselComments = 0 
let carouselBestContent = totalCarousel[0]
for(let i=0; i<totalCarousel.length; i++){
      totalCarouselLikes += totalCarousel[i].likes
      totalCarouselComments += totalCarousel[i].comments
      if(carouselBestContent.likes <= totalCarousel[i].likes && carouselBestContent.comments <= totalCarousel[i].comments){
        carouselBestContent = totalCarousel[i]
      }
}
let avgTotalLikes2 = totalCarouselLikes/totalCarousel.length
let avgTotalComents2 = totalCarouselComments/totalCarousel.length

console.log('Carousel Posts:')
console.log('Total',totalCarousel.length)
console.log('Avg Likes:',avgTotalLikes2)
console.log('Avg Comments:',avgTotalComents2)




// Problem:
// Track which hashtags generate most engagement.
// Given data:
let hashtagPosts = [
    { hashtags: ["travel", "photography"], likes: 200 },
    { hashtags: ["food", "cooking"], likes: 150 },
    { hashtags: ["travel", "adventure"], likes: 250 },
    { hashtags: ["photography", "nature"], likes: 180 },
    { hashtags: ["food", "recipe"], likes: 170 },
    { hashtags: ["travel", "photography", "nature"], likes: 300 }
];

// Tasks:
// 1. Count total uses of each hashtag


let person1 = {
  firstName: "Srikanth",
  lastName: "Yadav",
  fullName: function () {
    console.log("Full name is " + this.firstName + " " + this.lastName);
  }
};

let person2 = {
  firstName: "Rohit",
  lastName: "Sharma"
};
person1.fullName.call(person2);


function log(level) {
  return function(message) {
    console.log(`[${level}] : ${message}`);
  };
}

const info = log('INFO');
const error = log('ERROR');

info('Server started');     // [INFO] : Server started
error('Connection failed'); // [ERROR] : Connection failed








const restaurant1 = new Promise((res) => setTimeout(() => res("🍱 from Resto 1"), 2000));
const restaurant2 = new Promise((res, rej) => setTimeout(() => rej("❌ Resto 2 failed"), 1000));
const restaurant3 = new Promise((res) => setTimeout(() => res("🍕 from Resto 3"), 3000));

// 1️⃣ Promise.all — wait for all restaurants
Promise.all([restaurant1, restaurant3])
  .then((foods) => console.log("All arrived:", foods))
  .catch((err) => console.log("One failed:", err));

// 2️⃣ Promise.allSettled — check all results
Promise.allSettled([restaurant1, restaurant2, restaurant3])
  .then((results) => console.log("Results:", results));

// 3️⃣ Promise.race — first one to deliver wins
Promise.race([restaurant1, restaurant2, restaurant3])
  .then((food) => console.log("First arrived:", food))
  .catch((err) => console.log("First failed:", err));


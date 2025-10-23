// Assignment 1.1: Variable Declaration Practice

// Task: Fill in the blanks with `var`, `let`, or `const`

// 1. App name (never changes)
// const APP_NAME = "Instagram";

// 2. User's followers (changes daily)
// let followers = 1000;

// 3. User's following count (changes)
// let following = 500;

// 4. Maximum caption length (fixed by Instagram)
// const MAX_CAPTION_LENGTH = 2200;

// 5. Current like count (keeps changing)
// let likes = 0;

// 6. Instagram's blue color code (never changes)
// const INSTAGRAM_BLUE = "405DE6";

// 7. User's bio text (can be edited)
// let bio = "Love photography!";

// 8. Account creation year (never changes)
// const CREATED_YEAR = 2010;

// 9. Is user verified? (can change)
// let isVerified = false;

// 10. Total posts count (changes)
// let totalPosts = 0;

// Questions:
// 1. Which ones should use `const`?
// when the value should not be change use those variable as a const

// 2. Which ones should use `let`?
// when the value want to change use those variable as a let

// 3. Should any use `var`? Why or why not?
// dont use var its a bad practice because var is a global scope and function scope 
// we can redeclare and keep on change the value if we redeclare a var no.of time it will do override the value 

// Assignment 1.2: Re-declaration Test

// Problem:

// Try these and predict what happens:

// Test 1: Using var
// var username = "john_doe";
// var username = "jane_smith";  // What happens?
// console.log(username);
// here the out put "jane_smith" . because var has global 
// and function scope and posible to redeclare thats why here value is overrided

// Test 2: Using let
// let email = "john@example.com";
// let email = "jane@example.com";  // What happens?
// console.log(email);
// here it will show the syntax error because let dont have redeclaration feature

// Test 3: Using const
// const userId = "USER_123";
// const userId = "USER_456";  // What happens?
// console.log(userId);
// here it will show the syntax error because const dont have redeclaration f


// Assignment 1.3: Re-assignment Test

// Problem:

// Try these and predict what happens:

// Test 1: var re-assignment
// var likes = 100;
// likes = 200;
// console.log(likes);  // What will print?
//the output is 200. var have the re-assign feature and its global and function scope

// Test 2: let re-assignment
// let followers = 1000;
// followers = 1500;
// console.log(followers);  // What will print?
// here out ut is 1500 because we can reasign the let

// Test 3: const re-assignment
// const postId = "POST_123";
// postId = "POST_456";
// console.log(postId);  // What will print?
// the out put is Type error because const doesnt have the 
// reassign option once we intialize the value it not posible to change its constant 



// Level 2: Block Scope Understanding

// Assignment 2.1: If Block Scope

// Problem:

// Instagram age verification

// var age1 = 18;
// let age2 = 20;
// const age3 = 25;

// if (true) {
//     var age1 = 30;
//     let age2 = 35;
//     const age3 = 40;
    
//     console.log("Inside if - age1:", age1);
//     console.log("Inside if - age2:", age2);
//     console.log("Inside if - age3:", age3);
// }

// console.log("Outside if - age1:", age1);
// console.log("Outside if - age2:", age2);
// console.log("Outside if - age3:", age3);

// output is
// Inside if - age1:30
// Inside if - age2:35
// Inside if - age3:40
// Outside if - age1: 30
// Outside if - age2: 20
// Outside if - age3: 25

// here var role is different because its have reclaration 
// option thats why its override the previouse value

// _______________________
// |Global scope
// | var age1 =18 // it will chage with 30
// | let age2 = 20
// | const age3 = 25
// |
// |Block Scope
// |____________________
// | var age1 = 30;
// |let age2 = 35;
// |const age3 = 40;
// |____________________
// |
// |_____________________




// Assignment 2.2: Nested Block Scope

// Problem:

// Instagram story visibility settings

// var publicPost = "Everyone can see";
// let friendsPost = "Friends only";
// const privatePost = "Only me";

// if (true) {
//     var globalLeak = "I leak out!";
//     let blockStays = "I stay inside!";
//     const alsoStays = "Me too!";
    
//     if (true) {
//         var deepLeak = "I also leak!";
//         let deepStays = "Nested block only";
//         const deepConst = "Also nested only";
//     }
// }

// Which of these will work? Which will error?
// console.log(publicPost);     // Everyone can see
// console.log(friendsPost);    // Friends only
// console.log(privatePost);    // Only me
// console.log(globalLeak);     // I leak out! 
// var not a block scope its a global and function sope 
// thats why we can access the out os block

// console.log(blockStays);     // Refferance error
// console.log(alsoStays);      // Refferance error
// console.log(deepLeak);       // I also leak!
// var not a block scope its a global and function sope 
// thats why we can access the out os block

// console.log(deepStays);      // Refferance error
// console.log(deepConst);      // Refferance error




// Assignment 2.3: Multiple Blocks

// Problem:

// Instagram post types

// if (true) {
//     var type1 = "photo";
//     let type2 = "video";
//     const type3 = "carousel";
// }

// if (true) {
    // var type1 = "story";     // Can I redeclare this?
    // yes, var we can redeclare ,

    // let type2 = "reel";      // Can I redeclare this?
    //it will not effect the other block variable because let is block scope

    // const type3 = "live";    // Can I redeclare this?
     //it will not effect the other block variable because let is block scope
    
//     console.log(type1);// o/p is story
//     console.log(type2);// o/p is reel
//     console.log(type3);// o/p is live
// }

// console.log(type1);  // What will this show?
//o/p is story

// console.log(type2);  // Will this work?
//it will not work give the refferanceError

// console.log(type3);  // Will this work?
//it will not work give the refferanceError




// Assignment 3.2: TDZ with let/const

// Problem:

// Instagram authentication

// console.log("Email:", email);        // What happens?
// ReferenceError // here let email going to the temporal 
// dead zone thats why here getting ReferenceError without initailization we cant access it

// console.log("Password:", password);  // What happens?
// ReferenceError // here let password going to the temporal 
// dead zone thats why here getting ReferenceError without initailization we cant access it

// console.log("Token:", token);        // What happens?
// ReferenceError // here const token going to the temporal 
// dead zone thats why here getting ReferenceError without initailization we cant access it


// let email = "john@example.com";
// let password = "secret123";
// const token = "AUTH_TOKEN_456";

// console.log("Email:", email);        // What prints?
//o/p: john@example.com

// console.log("Password:", password);  // What prints?
//o/p: secret123

// console.log("Token:", token);        // What prints?
//o/p: AUTH_TOKEN_456




// Assignment 3.3: Mixed Hoisting

// Problem:

// Instagram app initialization

// console.log("1. App Name:", appName);     //1. App Name: undefiend
// console.log("2. Version:", version);      // refferanceError
// console.log("3. API Key:", apiKey);       // refferanceError

// var appName = "Instagram";
// let version = "2024.1";
// const apiKey = "sk_live_12345";

// console.log("4. App Name:", appName);     // 4. App Name: Instagram
// console.log("5. Version:", version);      // 5. Version: 2024.1
// console.log("6. API Key:", apiKey);       // 6. API Key: sk_live_12345

// |var                        |let                    |const    
// | Global and functionscope  |Block Scope            |Block scope
// | redeclaration posible     |not posible            |not posible
// |re-assign posible          |reassign posible       | re-assign not posible
// |before initialization give the undefiend | before initialization it will go to the temporal dead zone |  before initialization it will go to the temporal dead zone




// Level 4: Real-World Scenarios

// Assignment 4.1: Instagram Post Data

// Scenario: You're storing Instagram post information

// Decide: var, let, or const?

// const postId = "POST_ABC123";           // Never changes
// let caption = "Beautiful sunset!";     // User can edit
// let likeCount = 0;                     // Keeps increasing
// let commentCount = 0;                  // Keeps increasing
// let isPublic = true;                   // User can change
// const createdAt = "2024-01-15";         // Never changes
// const author = "john_doe";              // Never changes for this post
// let hashtags = "sunset beach";      // User can edit




// Assignment 4.2: Instagram User Settings

// Problem:

// // User preferences

// const THEME_OPTIONS = ["light", "dark", "auto"];  // App options (fixed)
// let selectedTheme = "light";                     // User's choice (changes)

// const LANGUAGES = ["English", "Spanish", "Hindi"]; // Available languages (fixed)
// let currentLanguage = "English";                 // User's choice (changes)

// const NOTIFICATION_TYPES = ["all", "some", "none"]; // Options (fixed)
// let notificationSetting = "all";                  // User's choice (changes)

// const MAX_PHOTO_SIZE_MB = 10;                      // Instagram limit (fixed)
// let currentUploadSize = 0;                       // Changes per upload

// THEME_OPTIONS[1] = 'srikanth';
// console.log(THEME_OPTIONS)



// Assignment 4.3: Instagram Story Timer

// Problem:

// Story settings

// const STORY_DURATION_SECONDS = 15;      // Instagram standard (fixed)
// let currentSecond = 0;                 // Changes every second

// const MAX_STORIES_PER_DAY = 100;        // Instagram limit (fixed)
//  storiesPostedToday = 0;           // Increases during day

// const STORY_TYPES = ["photo", "video", "boomerang"];  // Fixed options
// let currentStoryType = "photo";       // User's choice (changes)




// Level 5: Bug Finding

// Assignment 5.1: Find and Fix Bugs

// Problem:

// Instagram profile - Multiple bugs!

// const username = "john_doe"; 
// let followers = 1000;

// if (true) {
//     // var username = "jane_smith";  // Bug?
//     // var followers = 2000;         // Bug?
// }

// console.log("Username:", username);   // What shows?
// console.log("Followers:", followers); // What shows?

// Expected: john_doe, 1000
// Actual: jane_smith, 2000



// Assignment 5.2: Security Bug

// Problem:

// Instagram API keys - SECURITY ISSUE!

// const API_KEY = "sk_live_PRODUCTION_KEY";
// here instead of var use the const then only API_KEY will constant
// var DATABASE_PASSWORD = "prod_password_123";

// Later in code...
// if (true) {
//     API_KEY = "sk_test_DEVELOPMENT_KEY";  // DANGER!
    // here its over ride the global API_KEY 
    // if it change its not possible to login
// }

// Even later...
// console.log("Using API Key:", API_KEY);  // Which key?




// Assignment 5.3: Scope Confusion

// Problem:

// Instagram post counter - Confusion!

// var posts = 10;

// if (true) {
//     let posts = 20;
//     console.log("Inside:", posts);
// }

// console.log("Outside:", posts);

// Question: Are these the SAME variable or DIFFERENT?
//these different variables let block scope thats way its check the block level only




// Level 6: Challenge Problems

// Assignment 6.1: Complete Profile System

// Task: Create a complete user profile with proper variable types


// Instagram User Profile System
// Choose const or let for each

// User identity (never changes after account creation)
// const USER_ID = "USER_12345";
// const USERNAME = "john_doe";
// const EMAIL = "john@example.com";
// constappName = "Instagram";
// var ACCOUNT_CREATED_DATE = "2020-01-15";

// User stats (change over time)
// let followerCount = 1000;
// let followingCount = 500;
// let postCount = 150;
// let storyCount = 50;

// User settings (can be changed)
// let isPrivateAccount = false;
// let allowComments = true;
// let allowMessagesFrom = "everyone";
// let notificationsEnabled = true;

// App constants (never change)
// const MAX_BIO_LENGTH = 150;
// const MAX_USERNAME_LENGTH = 30;
// const MIN_PASSWORD_LENGTH = 6;
// const SUPPORTED_IMAGE_FORMATS = ["jpg", "png", "gif"];

// Current session (changes)
// let isLoggedIn = true;
// let lastActiveTime = "2024-01-15 10:30:00";
// let currentPageView = "home";



// Assignment 6.2: Before vs After Comparison

// Problem:

// BEFORE (Bad Code with var):

// var  version = "1.0";
// var apiKey = "secret123";

// if (true) {
//     var appName = "Facebook";  // Oops!
//     var apiKey = "wrong_key";  // Disaster!
// }

// console.log(appName);  // Facebook (WRONG!)
// console.log(apiKey);   // wrong_key (SECURITY BUG!)

// AFTER (Good Code)
// Your code here...

// const appName = "Instagram";
// let version = "1.0";
// const apiKey = "secret123";
// if (true) {
//     // var appName = "Facebook";  // Oops!
//     // var apiKey = "wrong_key";  // Disaster!
// }






// Assignment 6.3: Create Your Own Example

// Task: Create an Instagram feature using proper variables 

//Instagram photo upload system

//constants(never change)
// const MAX_FILE_SIZE = 10; //10MB limit
// const PHOTO_FORMATE = ['jpg','png'];
// const UPLOAD_PHOTOS_LIMIT = 2 // maximum 2 images uplaod
// const HASHTAGS = 5 //
// const CAPTION = 200 // allow only 200 words

// //variables (can change)
// let backgroundSong = 'song name';
// let caption = 'i love travelling';
// let hashTags = 2;
// let isUploading = false;
// let addLocation = 'AP'




// Quick Self-Check Questions

// After completing assignments, answer these:

// 1. When should I use `const`?
//    - Answer: when value dont need to change use the const 

// 2. When should I use `let`?
//    - Answer: when we need change varaible value use the let

// 3. Should I ever use `var`?
//    - Answer: dont use var its not a good practise 

// 4. What is block scope?
//    - Answer: anywhere we can access the block scope variables

// 5. What is hoisting?
//    - Answer: during the memory creation all varaible and function move to the top

// 6. What is TDZ (Temporal Dead Zone)?
//    - Answer: space between the memory creation and intialization here let and const are comimg to tdz

// 7. Why is `const` better for security?
//    - Answer: const doesnt have the chagong option so very secure and during the declaration we should initialize the value

// 8. Can I change properties of a `const` object?
//    - Answer: yes

// forEach Practice
// GIVEN DATA
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// TASK 1: Print all fruits
fruits.forEach((fruit) => console.log(fruit))

// TASK 2: Print fruits with numbers
fruits.forEach((fruit,i) => console.log(i+1+'.',fruit))

// TASK 3: Print fruits in uppercase

fruits.forEach((fruit) => console.log(fruit.toUpperCase()))


// map Practice
// GIVEN DATA
let prices = [100, 200, 300, 400, 500];

// TASK 1: Double all prices
const doublePrices = prices.map((price) => price * 2)
console.log(doublePrices)

// TASK 2: Add ₹50 to each price
const addPrices = prices.map((price) => price + 50)
console.log(addPrices)

// TASK 3: Apply 10% discount
const discountPrices = prices.map((price) => price * 0.9 )
console.log(discountPrices)


// TASK 4: Format prices with ₹ symbol
const symbolPrices = prices.map((price) => "₹"+price )
console.log(symbolPrices)


// filter Practice
// GIVEN DATA
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 == 0)
console.log(evenNumbers)

// TASK 2: Get odd numbers
const oddNumbers = numbers.filter(number => number % 2 == 1)
console.log(oddNumbers)

// TASK 3: Get numbers greater than 5
const greaterNumbers = numbers.filter(number => number > 5)
console.log(greaterNumbers)


// TASK 4: Get numbers between 3 and 7
const betweenNumbers = numbers.filter(number => number >= 3 && number <= 7)
console.log(betweenNumbers)


// Sort Practice
// GIVEN DATA
let values = [5, 2, 8, 1, 9, 3];

// TASK 1: Sort ascending (smallest to largest)
const ascendingValues = values.sort((a,b) => a-b)
console.log(ascendingValues)

// TASK 2: Sort descending (largest to smallest)
const decendingValues = values.sort((a,b) => b-a)
console.log(decendingValues)



//  Myntra Products - All Methods
// GIVEN DATA
let products = [
    { name: "Shirt", price: 999, stock: 5 },
    { name: "Jeans", price: 1999, stock: 0 },
    { name: "Shoes", price: 2999, stock: 10 },
    { name: "Watch", price: 499, stock: 3 },
    { name: "Belt", price: 299, stock: 0 }
];

// TASK 1: Display all product names (forEach)
products.forEach(product => console.log(product.name))

// TASK 2: Get all prices (map)
const productPrices = products.map(product => product.price)
console.log(productPrices)

// TASK 3: Get products in stock (filter)
const availbleStock = products.filter(product => product.stock > 0)
console.log(availbleStock)

// TASK 4: Get affordable products under ₹1000 (filter)
const afffordableProducts = products.filter(product => {
    if(product.price < 1000){
        console.log( product.name)
    }
})

// TASK 5: Sort products by price (low to high)
const lowToHighPrices = products.sort((a,b) => {
return a.price-b.price
})
console.log(lowToHighPrices)

// TASK 6: Apply 20% discount to all prices (map)
const discountPrice = products.map(product => (product.price * 0.8).toFixed())
console.log(discountPrice)


//  Myntra Cart Total
// GIVEN DATA
let cart = [
    { name: "Shirt", price: 999, qty: 2 },
    { name: "Jeans", price: 1999, qty: 1 },
    { name: "Shoes", price: 2999, qty: 1 }
];

// TASK 1: Calculate total for each item (map)
const cartPrices = cart.map(product => product.price)
console.log(cartPrices)

// TASK 2: Calculate cart total
let totalCartValue = 0
cartPrices.forEach(value => {
    totalCartValue += value
    console.log(value,totalCartValue)
})
console.log(totalCartValue)

// TASK 3: Display cart summary (forEach)
cart.forEach((product,i) => console.log(i+1+'.',product.name,'*',product.qty, '=',product.price ))


//  Student Grades
// GIVEN DATA
let students = [
    { name: "Ravi", marks: 85 },
    { name: "Priya", marks: 45 },
    { name: "Arjun", marks: 92 },
    { name: "Sneha", marks: 38 },
    { name: "Kiran", marks: 76 }
];

// TASK 1: Find students who passed (marks >= 40)
const passedStudent = students.filter(student => student.marks >= 40)
console.log(passedStudent)

// TASK 2: Find students who failed (marks < 40)
const failedStudent = students.filter(student => student.marks < 40)
console.log(failedStudent)

// TASK 3: Get all marks only
const marks = students.map(student => student.marks)
console.log(marks)

// TASK 4: Sort students by marks (highest to lowest)
const highLowToMarks = students.sort((student1,student2) => student2.marks-student1.marks)
console.log(highLowToMarks)

// TASK 5: Add grade to each student (map)
const gradesOfStudents = students.map(student => {
    if(student.marks >= 90){
        student.grade = 'A'
        return student
    }
    if(student.marks >= 75){
        student.grade = 'B'
        return student
    }
    if(student.marks >= 50){
        student.grade = 'C'
        return student
    }
    if(student.marks < 50){
        student.grade = 'Fail'
        return student
    }
})
console.log(gradesOfStudents)


// Instagram Posts
// GIVEN DATA
let posts = [
    { id: 1, likes: 150, comments: 20 },
    { id: 2, likes: 300, comments: 45 },
    { id: 3, likes: 180, comments: 25 },
    { id: 4, likes: 500, comments: 80 },
    { id: 5, likes: 90, comments: 10 }
];

// TASK 1: Get posts with more than 200 likes
const mostLikedPosts = posts.filter(post => post.likes >200)
console.log(mostLikedPosts)

// TASK 2: Calculate total engagement (likes + comments) for each post

const totalEngagement = posts.map(post =>  post.likes + post.comments)
console.log(totalEngagement)

// TASK 3: Find most liked post (sort by likes, get first)
const mostLikedPost = posts.sort((post1,post2) => post2.likes-post1.likes)
console.log(mostLikedPost[0])

// TASK 4: Get all like counts
let countLikes = posts.map(post => post.likes)
console.log(countLikes.length)

let totalLikes = 0
posts.forEach(post => totalLikes += post.likes)
console.log(totalLikes/countLikes.length)


// E-commerce Filter System
// GIVEN DATA
let productsList = [
    { id: 1, name: "Shirt", price: 999, category: "clothing", rating: 4.5 },
    { id: 2, name: "Jeans", price: 1999, category: "clothing", rating: 4.2 },
    { id: 3, name: "Laptop", price: 45999, category: "electronics", rating: 4.8 },
    { id: 4, name: "Phone", price: 25999, category: "electronics", rating: 4.6 },
    { id: 5, name: "Watch", price: 2999, category: "accessories", rating: 4.0 },
    { id: 6, name: "Shoes", price: 3999, category: "clothing", rating: 4.7 }
];

// TASK 1: Get only clothing items
const clothingItems = productsList.filter(product => product.category === 'clothing')
console.log(clothingItems)

// TASK 2: Get products under ₹5000
const minimulPriceProducts = productsList.filter(product => product.price < 5000)
console.log('Under 5000 products:',minimulPriceProducts)

// TASK 3: Get highly rated products (rating >= 4.5)
const highRatedProducts = productsList.filter(product => product.rating >= 4.5)
console.log('High rating products:',highRatedProducts)

// TASK 4: Sort products by price (low to high)
const sortPrice = productsList.sort((product1,product2) => product1.price - product2.price)
console.log('Low to high prices:',sortPrice)

// TASK 5: Sort products by rating (high to low)
const sortRating = productsList.sort((product1,product2) => product2.rating - product1.rating)
console.log('high to low rating:',sortRating)

// TASK 6: Get names of all electronics
const electronicsProduct = productsList.filter(product => product.category === 'electronics').map(product => product.name)
console.log('Electronic names:',electronicsProduct)

// TASK 7: Calculate average price of all products
let totalPriceOfProduct = 0
productsList.map(product => product.price).forEach(price => totalPriceOfProduct += price)
console.log((totalPriceOfProduct/productsList.length).toFixed())

// TASK 8: Get most expensive product
const expensiveProduct = productsList.sort((product1 , product2) => product2 - product1)
console.log(expensiveProduct[0])


//  User Analytics Dashboard
// GIVEN DATA
let users = [
    { id: 1, name: "Ravi", age: 25, city: "Hyderabad", premium: true },
    { id: 2, name: "Priya", age: 30, city: "Mumbai", premium: false },
    { id: 3, name: "Arjun", age: 22, city: "Hyderabad", premium: true },
    { id: 4, name: "Sneha", age: 28, city: "Delhi", premium: false },
    { id: 5, name: "Kiran", age: 35, city: "Bangalore", premium: true }
];

// TASK 1: Get all premium users
const premiumUsers = users.filter(user => user.premium === true)
console.log(premiumUsers)

// TASK 2: Get users from Hyderabad
const hyderabadUsers = users.filter(user => user.city === 'Hyderabad')
console.log(hyderabadUsers)

// TASK 3: Get users aged 25-30
const agedUsers = users.filter(user => user.age >= 25 && user.age <= 30)
console.log(agedUsers)

// TASK 4: Count total premium users
console.log('Count of premium users:',premiumUsers.length)

// TASK 5: Get all cities (unique list)
const cities = users.map(user => user.city).filter((city,i,arr) => arr.indexOf(city) === i)
console.log(cities)

// TASK 6: Sort users by age (youngest first)
const youngAge = users.sort((a,b) => a.age-b.age)
console.log(youngAge[0])

// TASK 7: Get names of all non-premium users
const nonPremiumUsers = users.filter(user => user.premium === false)
console.log(nonPremiumUsers)




// Order Management System
// GIVEN DATA
let orders = [
    { orderId: "ORD001", amount: 2500, status: "delivered", items: 3 },
    { orderId: "ORD002", amount: 1200, status: "pending", items: 2 },
    { orderId: "ORD003", amount: 5000, status: "delivered", items: 5 },
    { orderId: "ORD004", amount: 800, status: "cancelled", items: 1 },
    { orderId: "ORD005", amount: 3500, status: "delivered", items: 4 }
];

// TASK 1: Get all delivered orders
const deliversOrders = orders.filter(order => order.status === 'delivered')
console.log('deliversOrders:',deliversOrders)


// TASK 2: Get pending orders only
const pendingOrders = orders.filter(order => order.status === 'pending')
console.log('pendingOrders:',pendingOrders)



// TASK 3: Calculate total revenue (delivered orders only)
let totalDeliveredRevenue = 0;
 deliversOrders.forEach(order => totalDeliveredRevenue += order.amount)
console.log('totalDeliveredRevenue:',totalDeliveredRevenue)

// TASK 4: Get orders above ₹2000
const filterOrders = orders.filter(order => order.amount > 2000)
console.log('Above 2000rs orders:',filterOrders)

// TASK 5: Sort orders by amount (high to low)
const sortByAmount = orders.sort((order1,order2) => order2.amount-order1.amount)
console.log('Sort by high to low amount',sortByAmount)

// TASK 6: Get order IDs of cancelled orders
const cancelledOrderId = [] 
orders.map(order => {
if(order.status === 'cancelled'){
    cancelledOrderId.push(order.orderId)
}
} )
console.log(cancelledOrderId)


// TASK 7: Calculate average order value
let totalOrdersAmount = 0
let totalItemsOrders = 0
orders.forEach(order => {
    totalOrdersAmount += order.amount
    totalItemsOrders += order.items
})
console.log('Average order value is:',(totalOrdersAmount/totalItemsOrders).toFixed())


// TASK 8: Count total items sold (delivered only)
let totalItemsSold = 0;
orders.forEach(order => {
    if(order.status === 'delivered' ){
        totalItemsSold += order.items
    }
})
console.log('Count of total items sold',totalItemsSold)



// Social Media Analytics
// GIVEN DATA
let mediaPosts = [
    { postId: 1, user: "ravi", likes: 150, comments: 20, shares: 10, date: "2024-01-15" },
    { postId: 2, user: "priya", likes: 300, comments: 45, shares: 25, date: "2024-01-16" },
    { postId: 3, user: "ravi", likes: 180, comments: 30, shares: 15, date: "2024-01-17" },
    { postId: 4, user: "arjun", likes: 500, comments: 80, shares: 50, date: "2024-01-18" },
    { postId: 5, user: "priya", likes: 220, comments: 35, shares: 20, date: "2024-01-19" }
];

// TASK 1: Calculate engagement for each post
// Engagement = likes + comments + shares
// Add engagement property to each post
 mediaPosts.forEach((post,i) => {
    let engagement = post.likes + post.comments + post.shares
    mediaPosts[i].engagement = engagement
})
console.log(mediaPosts)

// TASK 2: Get posts by 'ravi'
const filterPost = mediaPosts.filter(post => post.user === 'ravi')
console.log('Posts by ravi:',filterPost)

// TASK 3: Find most liked post
const mostLikedPostSort = mediaPosts.sort((post1,post2) => post2.likes-post1.likes)
console.log('Most like post:',mostLikedPostSort[0])


// TASK 4: Get posts with more than 200 likes
const filterThelikes = mediaPosts.filter(post => post.likes >= 200)
console.log('More then 200 likes posts:',filterThelikes)

// TASK 5: Calculate total likes across all posts
let totallLikesOfMediaPost = 0
mediaPosts.forEach(post => totallLikesOfMediaPost += post.likes)
console.log('Calculate total likes across all post',totallLikesOfMediaPost)

// TASK 6: Sort posts by engagement (high to low)
const sortByEngagement = mediaPosts.sort((engagement1,engagement2) => engagement2 - engagement1)
console.log('Sort posts by engagement (high to low):',sortByEngagement)

// TASK 7: Get average likes per post
let totalMediaPostLikes = 0
 mediaPosts.forEach((post,) => {
     totalMediaPostLikes += post.likes
})
console.log('average likes per post',totalMediaPostLikes/mediaPosts.length)


// TASK 8: Get posts with high engagement (> 300)
const highEngagementPosts = mediaPosts.filter(post => post.engagement > 300)
console.log(highEngagementPosts)

//  Final Challenge - Myntra Clone
// COMPLETE E-COMMERCE SYSTEM
let myntraProducts = [
    { 
        id: 1, 
        name: "Cotton Shirt", 
        price: 999, 
        category: "clothing",
        brand: "Levis",
        rating: 4.5,
        stock: 10,
        discount: 20
    },
    { 
        id: 2, 
        name: "Denim Jeans", 
        price: 1999, 
        category: "clothing",
        brand: "Levis",
        rating: 4.2,
        stock: 5,
        discount: 30
    },
    { 
        id: 3, 
        name: "Running Shoes", 
        price: 2999, 
        category: "footwear",
        brand: "Nike",
        rating: 4.8,
        stock: 0,
        discount: 15
    },
    { 
        id: 4, 
        name: "Casual Watch", 
        price: 1499, 
        category: "accessories",
        brand: "Titan",
        rating: 4.0,
        stock: 15,
        discount: 10
    },
    { 
        id: 5, 
        name: "Formal Shoes", 
        price: 3499, 
        category: "footwear",
        brand: "Bata",
        rating: 4.3,
        stock: 8,
        discount: 25
    }
];


// PART 1: PRODUCT FILTERING

// TASK 1.1: Get products in stock
const getProductStock = myntraProducts.filter(product => product.stock > 0)
console.log('Stocked products', getProductStock)

// TASK 1.2: Get products by brand (Levis)
const getProductByBrand = myntraProducts.filter(product => product.brand === 'Levis')
console.log('Leaves Brand Products',getProductByBrand)


// TASK 1.3: Get affordable products (< ₹2000)
const getAffordableProduct = myntraProducts.filter(product => product.price < 2000)
console.log('Affordable products',getAffordableProduct)

// TASK 1.4: Get highly rated products (rating >= 4.5)
const getHighRatrdProduct = myntraProducts.filter(product => product.rating >= 4.5)
console.log('High rated products',getHighRatrdProduct)

// ============================================
// PART 2: PRICE CALCULATIONS
// ============================================

// TASK 2.1: Calculate discounted price for each product
// Formula: price - (price * discount / 100)
// Add new property 'finalPrice' to each product
const finalCostProducts = myntraProducts.map(product => {
    let finalPrice = product.price - (product.price * product.discount / 100)
    product.finalPrice = finalPrice
    return product
})
console.log('Final price of all products',finalCostProducts)


// TASK 2.2: Get products with best discount (discount >= 20%)
const bestDiscountProducts = myntraProducts.filter(product => product.discount >= 20)
console.log('Best discount products',bestDiscountProducts) 


// TASK 2.3: Calculate total inventory value
// (price × stock for all products)
let totalInventaryOfProducts = 0
myntraProducts.forEach(product => totalInventaryOfProducts += product.price * product.stock)
console.log('Total iventory of products',totalInventaryOfProducts)

// ============================================
// PART 3: SORTING & RANKING
// ============================================

// TASK 3.1: Sort products by price (low to high)
const sortMyntraProducts = myntraProducts.sort((product1,product2) => product1.price-product2.price)
console.log('Sort the product low to high',sortMyntraProducts)

// TASK 3.2: Sort products by rating (high to low)
const sortByRatingProducts = myntraProducts.sort((product1,product2) => product2.rating-product1.rating)
console.log('Sorting by rating high to low',sortByRatingProducts)

// TASK 3.3: Sort products by discount (highest first)
const sortByDiscountProducts = myntraProducts.sort((product1,product2) => product2.discount-product1.discount)
console.log('First highst discount product',sortByDiscountProducts[0])

// ============================================
// PART 4: PRODUCT DISPLAY
// ============================================

// TASK 4.1: Display all products with formatted output
// Expected format:
// 1. Cotton Shirt - ₹999 (20% off) - ⭐ 4.5
// 2. Denim Jeans - ₹1,999 (30% off) - ⭐ 4.2
// ... etc
myntraProducts.forEach((product,i) => console.log(i+1+'.',product.name,'-','₹'+product.price, '('+product.discount+'%'+')','-','⭐',product.rating))

// TASK 4.2: Display only available products (stock > 0)
const getAvailableStock = myntraProducts.filter(product => product.stock > 0)
console.log('available products', getAvailableStock)


// ============================================
// PART 5: ANALYTICS
// ============================================

// TASK 5.1: Count products by category
// Expected output: { clothing: 2, footwear: 2, accessories: 1 }
const categoryProducts = {}
myntraProducts.forEach(product => {
    if(product.category === 'clothing'){
        if(categoryProducts.clothing) return categoryProducts.clothing++
        categoryProducts.clothing = 1
    }
    if(product.category === 'footwear'){
        if(categoryProducts.footwear) return categoryProducts.footwear++
        categoryProducts.footwear = 1
    }
    if(product.category === 'accessories'){
        if(categoryProducts.accessories) return categoryProducts.accessories++
        categoryProducts.accessories = 1
    }
})
console.log("categoryProducts",categoryProducts)

// TASK 5.2: Calculate average product price
let totalStock = 0;
let totalPrice = 0;
myntraProducts.forEach(product => {
   totalStock += product.stock
   totalPrice += product.price*product.stock
})
console.log("Average of product price",(totalPrice/totalStock).toFixed())


// TASK 5.3: Find most expensive product
const sortExpensiveProduct = myntraProducts.sort((product1,product2) => product2.price - product1.price)
console.log('Expensive product',sortExpensiveProduct[0])


// TASK 5.4: Find cheapest product in stock
console.log('Cheapest product',sortExpensiveProduct[sortExpensiveProduct.length-1])


// TASK 5.5: Calculate potential revenue if all stock sold
// (finalPrice × stock for each product)
let finalPrice = 0
myntraProducts.forEach(product => finalPrice += product.finalPrice*product.stock)
console.log('Revenue',finalPrice.toFixed())
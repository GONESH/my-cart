# Nextjs Tailwind Ecommerce Website Like Amazon

description

## Lessons

1. Introduction
2. Install Tools
3. Create Next App
4. Publish to Github
5. Create Website Layout
   1. Create layout component
   2. add header
   3. add main section
   4. add footer
   5. add tailwind classes
6. List Products

   1. add data.js
   2. add images
   3. render products

7. Create Product Details
   1. Create Product Page
   2. Creat 3 colums
   3. Show image in first column
   4. Show product info in second column
   5. Show add to cart action on third column
   6. add styles
8. Handle Add To Cart
   1. define react context
   2. define cart item state
   3. create add to cart action
   4. add reducer
   5. create store provider
   6. handle add to cart button
9. Create cart page
   1. Create cart.js
   2. use context to get cart items
   3. List items in cart
   4. redirect to cart screen after add to cart
10. Handle changing Cart Items
    1. Add select box for quantity
    2. handle select box change
11. Save Cart Items
    1. install js-cookies
    2. save and retrieve cart items in cookies
12. Create Login form
    1. install react hook form
    2. create input boxex
    3. add login button
13. Connect to MongoDb
    1. install mongoose
    2. install mongodb or use mongodb atlas
    3. save connection in .env file
    4. create db utils file
    5. create sample users
14. Create Login Api
    1. install next-auth
    2. ccreate nextauth.js
    3. implement signin
    4. use signin in login form
15. Add user menu
    1. check user authentication
    2. install headlessui
    3. show user menu
16. Create shipping Screen
    1. Display address fields
    2. save address in context
17. Create Payment Method Screen
    1. display payment method
    2. save payment method in context
18. Seed sample Product
    1. insert sample products to mongodb
    2. load products from db in home and product screen
    3. check product count in stock in add to cart
19. Load Product MongoDB
    1. load products in home page from mongodb
    2. load products in product page from mongodb
    3. use product api tto check count in stock in add to cart
20. Create Place order Screen
    1. display shipping address
    2. display payment method
    3. display order items
    4. implement create order
21. Create Order Screen
    1. implement backend api for order details
    2. load order data from backend
    3. display order details
22. Create Register Screen
    1. add signup api
    2. creeate register page
    3. call api on form submit
23. Pay order by Paypal
    1. add paypal button
    2. handle payment
    3. create backend api
    4. update order state
24. Create Order History Screen
    1. create my order api
    2. create order history
    3. fetch oorders amd display orders
25. Publish on Vercel
    1. Create vercel account
    2. connect to github
    3. set next auth and mongodb in env variables
    4. push code to git hub

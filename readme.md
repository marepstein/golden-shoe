#### TO START THE APP

1. 'npm i'
2. make sure Mongo is running - run 'mongo' in the terminal unless you have Catalina then run: mongod --dbpath ~/data/db
3. npm run seed
4. npm run serve:front
5. npm run serve:back

### TO TEST

1. Make sure backend is not running - as localhost will be taken
2. npm run test

## Features

\*\* Mobile first design
\*\* Chatbot on homepage - for illustration - goes up to taking your order number
\*\* Front page redesign - some links and features for illustration e.g. search in navbar and footer links. Click on womens to see products.
\*\* Cart customization - add and delete
\*\* Stock control - once customer has checked out, updates product status to sold based on product code
\*\* User details - register and login - later additions would include a user profile with favourites etc

## USER FLOW

1. Click Womens/All
2. Select view product
3. Select size and add to cart
4. Sign up as user from link in cart
5. Login as user
6. Checkout -- Upon checkout stock is removed from product page

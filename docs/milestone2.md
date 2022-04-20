## Team Name:
Caffeine Overflow

## Web Application Name:
Caffeine Overflow 

## Team Overview:
Rinija Raja : rinraja

Meghana Jaladanki : meghana-jaladanki

Mehul Ramaswami : Mehul1107

## Data objects

Drink Objects - Each has 4 fields: ID, Dairy, Espresso, Flavor Shots, and Sweetner

User Objects - Each has 4 fields: ID, Name, Email, Password, and List of Orders

Order Objects - Is a relationship between 1 Drink and 1 User and belongs to User. Each order has the following fields: orderID, userID, and drinkID

## API Planning:

CREATE (POST)
- /drink/new -> allows for a new drink to be created when a request is sent to this endpoint containing the dairy, espresso, sweetener, and flavor shot information
- /user/new -> allows for a new user to be created when a request is sent to this endpoint containing the name, email, password, and list of orders 
- /orders/new -> allows for a new order to be created with the drinkID and userID

READ (GET)
- /drink/view -> a view endpoint that returns the drink ordered by a given user when the drinkID is provided
- /orders/view -> a view endpoint will return the order for a given user when the orderID is provided

- /login -> allows users to login
- /logout -> allows users to logout

UPDATE
- /orders/update -> will allow users to update their order

DELETE
- /orders/:ID -> will delete a given order when the ID is provided
- /user/:ID -> will delete a given user when the ID is provided

## Front-end Implementation:

1) Login 
This is our application’s login screen, where users also have the option to sign up if they do not have an account yet. Once users sign in, they can proceed to place their order. We will be creating the user object here and we will be saving their email and password in order to create an account for them. 

## Hosted Application: 
- The URL of your Heroku Application



## Team Contributions:

Meghana Jaladanki
-

Rinija Raja
-

Mehul Ramaswami
-

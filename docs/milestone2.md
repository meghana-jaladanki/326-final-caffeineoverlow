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

Login: 

This is our application’s login screen, where users also have the option to sign up if they do not have an account yet. Once users sign in, they can proceed to place their order. We will be creating the user object here and we will be saving their email and password in order to create an account for them. 

![image](https://user-images.githubusercontent.com/73535868/164343491-9a5a2399-10e1-4db6-83a6-9bfc7b9f7004.png)

Menu:

This menu screen displays the different drink options that users can choose from. Each drink option includes an image, price, description, and order button. Once the user clicks the order button, then will be directed to the options page where they can specify their order. 

![image](https://user-images.githubusercontent.com/73535868/164344092-b192b9b4-c79a-4545-b4d8-adb3192ea415.png)

![image](https://user-images.githubusercontent.com/73535868/164344208-9f7f10eb-e110-47c3-880a-9847a32b7768.png)

![image](https://user-images.githubusercontent.com/73535868/164344140-3aee076b-2c5c-43fe-880f-a09424ed1680.png)

Options: 

This is our options screen and it will allow users to select the additional things that they would like to add to their drink. They can select their dairy, espresso shots, flavor shots, and sweetener. Once a user specifies these values, a drink object will be populated with the specifications. The user will then be able to place an order with the drink they created. 

![image](https://user-images.githubusercontent.com/73535868/164343737-22f96a1a-5569-4c91-ae9d-2e948b923850.png)

Orders:
<img width="1428" alt="Screen Shot 2022-04-20 at 9 39 51 PM" src="https://user-images.githubusercontent.com/43730457/164354623-286fa7e6-633c-4f38-9dff-e697e94ea960.png">


This is our orders screen and it will allow users to view the orders that they have created and they will also be able to change their order if they made a mistake or changed their mind. We will also be displaying the amount of time that users will need to wait in order to pick up their drink.



## Hosted Application: 
- The URL of your Heroku Application


## Additional Features:

We would like to include a payment option where students will be able to pay using the application instead of going in person. 

## Team Contributions:

Meghana Jaladanki
-

Rinija Raja
- Created the endpoints and data objects
- Wrote up the Milestone2 doc
- Worked on server
- Re-formatted menu front-end
- Re-formatted options front-end
- Worked on client side for options page

Mehul Ramaswami
- Worked on the client side order page
- Edited the Milestone2 doc
- Re-formatted the order front-end
- Worked on the server part for the order page
- Created release for milestone

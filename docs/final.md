## Team Name:
The Caffinators 

## Web Application Name:
Caffeine Overflow 

## Semester: 
Spring 2022

## Overview:

Caffeine Overflow is an on campus coffee ordering app, where members of the UMass Amherst community can order drinks for pickup from Procrastination Station, the cafe located in Dubois Library. Users can sign-in using their google account and place an order and simply go and pick up their order and pay for it at the Procrastination Station. Creating a service like this will make it much more convenient for students to pick up and pay for their coffee or other items while on the go, instead of having to wait in line to place orders. Our application does not relate to any other existing applications, since currently there is no service available similar to Caffeine Overflow on campus.

## Team Members:
Rinija Raja : rinraja

Meghana Jaladanki : meghana-jaladanki

Mehul Ramaswami : Mehul1107

## User Interface:

Login: 

This is our application’s login screen, where users will be able to create an account using their google account. Once users sign in, they can proceed to place their order. We will be creating the customer table where this login information will be saved.  

![image](https://user-images.githubusercontent.com/73535868/167266548-ac4940af-fc3c-4e0c-8064-41692acfcc5d.png)

Menu:

This menu screen displays the different drink options that users can choose from. Each drink option includes an image, price, description, and order button. Once the user clicks the order button, then will be directed to the options page where they can specify their order. 

![image](https://user-images.githubusercontent.com/73535868/167266655-e334577e-879e-40e3-bc38-c8292f81b07f.png)

![image](https://user-images.githubusercontent.com/73535868/167266667-e54de55b-4aae-4d5a-a2bb-70328261a72a.png)

![image](https://user-images.githubusercontent.com/73535868/167266677-e9b74ff7-0370-4ff2-9651-34d00d7cd3f9.png)

Options: 

This is our options screen and it will allow users to select the additional things that they would like to add to their drink. They can select their dairy, espresso shots, flavor shots, and sweetener. Once a user specifies these values, a drink object will be populated with the specifications. The user will then be able to place an order with the drink they created. 

![image](https://user-images.githubusercontent.com/73535868/167266726-ad766198-c762-492b-8757-144fe9fa73c3.png)

Orders:

This is our orders screen and it will allow users to view the orders that they have created and they will also be able to change their order if they made a mistake or changed their mind. We will also be displaying the amount of time that users will need to wait in order to pick up their drink.

![image](https://user-images.githubusercontent.com/73535868/167266735-2898cf1d-6611-4e20-9ce9-4f6161d706c4.png)

## Hosted Application: 

## Video Link:
https://www.youtube.com/watch?v=3xBu0LMwg_M&list=PLr94vpzaMmB_PYPBsHuy7ahXj2oSWwVZI&index=1

## APIs:

| Endpoint     | Description |
|--------------|-----------  |
| /newCustomer  | Allows for a new customer to be created with a username, password, and customer_id     |
| /newOrder  | Allows a new order to be created with an order_id, drink, dairy, espresso, flavor, sweetener, total, order_qual    |
| /viewCustomer:customer_id | A view endpoint that returns the customer information given a customer_id     |
| /viewOrder:order_id  | A view endpoint that returns the order information given a order_id  |
| /login | Allows users to login to the application  |
| /logout  |  Allows users to login out of the application  |
| /updateOrder:order_id  | Will allow users to update their order and change their specifications  |
| /deleteCustomer:customer_id  | Will delete a customer when the customer_id is provided  |
| /deleteOrder:order_id  | Will delete an order when the order_id is provided  |

## Database:

Tables

TABLE customer(

	customer_id integer primary key,
	username varchar(30), 
	password varchar(30)
    
);

TABLE order(

	order_id integer,
	drink varchar(30),
	dairy varchar(30),
	espresso varchar(30), 
	flavor varchar(30),
	sweetener varchar(30),
	total integer,
	order_qual integer primary key,
	foreign key (order_id) references customer (customer_id)

);

Customer Table

| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| customer_id  | integer    | The unique id for each customer  |
| username     | varchar(30)   | The username for the customer account |
| password     | varchar(30)   | The password for the customer account |

Order Table

| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| order_id  | integer    | The unique id for each order |
| drink     | varchar(30)   | The drink type selected |
| dairy     | varchar(30)   | The dairy option selected  |
| espresso     | varchar(30)   | The number of espresso shots selected |
| flavor     | varchar(30)   | The flavor shot selected |
| sweetener     | varchar(30)   | The sweetener selected |
| total    | integer  | The total price for the order |
| order_qual    | integer  | The unique order qualification number|


## Mappings:

| URL Routes   | Description   |
|--------------|-------------  |
| /  | routes to the login page and will allow users to sign in using their google account     | 
| /menu     | routes to the menu page where users will be able to view the list of drinks at Procrastination Station  | 
| /options    | routes to the order page where users will be able to specify the dairy, espresso, flavor, and sweetener options for their drink   | 
| /orders   | routes to the order page where users will be able to view the list of orders that they made as well as the total price   | 

## Authentication/Authorization:

In order to place an order, we had users authenticated using their Google account by integrating Google Sign-In into our web application. Caffeine Overflow uses OAuth 2.0 to access Google API and we created authorization credentials that identified our application to Google’s OAuth 2.0 server. After we sign in a user with Google using the default scopes, we can access the user's Google ID, name, profile URL, and email address. During this process, the user will see the Google sign-in button, and then upon clicking it they will be able to select an email address and sign-in, and then proceed to place an order. 

## Division of Labor:

Meghana Jaladanki
- Created google sign-in for login page 
- Created authorization crendentials to access Google API
- Worked on client side for orders page 
- Worked on navbar displaying menu, orders, and login
- Deployed project onto Heroku 
- Worked on documentation section for Authentication/Authorization 

Rinija Raja
- Worked on client side and sever side for the options page
- Worked on client side for the menu page
- Created and implemented the endpoints
- Created the postgres database and connected it to the Heroku app
- Created both the customer and order tables
- Created database.js where new records are added, deleted, updated, and read to both databases
- Worked on orders.js to display the data and save data retrieved from the users
- Worked on documentation sections (api, database, and mappings) 

Mehul Ramaswami
- Worked on the database, and tried to get Postgres integration working
- Worked on and edited documentation sections
- Edited Team Video
- Uploaded Team Video to Youtube and added to the playlist
- Created release for project

## Conclusion:

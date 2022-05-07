## Database Documentation:

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

## Team Contributions:

Meghana Jaladanki
- 

Rinija Raja
- Created the postgres database and connected it to the Heroku app
- Created both the customer and order tables
- Created database.js where new records are added, deleted, updated, and read to both databases
- Worked on options.js and orders.js to display the data and save data retrieved from the users

Mehul Ramaswami
- 

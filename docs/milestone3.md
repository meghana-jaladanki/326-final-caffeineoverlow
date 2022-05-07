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
| drink     | varchar(30)   | The username for the customer account |
| dairy     | varchar(30)   | The password for the customer account |
| espresso     | varchar(30)   | The username for the customer account |
| flavor     | varchar(30)   | The password for the customer account |
| sweetener     | varchar(30)   | The username for the customer account |
| total    | integer  | The password for the customer account |
| order_qual    | integer  | The for the customer account |

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
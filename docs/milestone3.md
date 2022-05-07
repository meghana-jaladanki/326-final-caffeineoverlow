## Database Documentation:

Tables

TABLE customers(

	 customer_id SERIAL primary key,
         email varchar(30)
    
);

TABLE orders(

	 order_id SERIAL primary key,
         c_id integer,
         drink varchar(30),
         dairy varchar(30),
         espresso varchar(30),
         flavor varchar(30),
         sweetener varchar(30),
         total numeric,
         foreign key (c_id) references customers(customer_id)

);

Customers Table

| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| customer_id  | integer    | The unique id for each customer  |
| email    | varchar(30)   | The email for the customer account |

Orders Table

| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| order_id  | integer    | The unique id for each order |
| drink     | varchar(30)   | The drink type selected |
| dairy     | varchar(30)   | The dairy option selected  |
| espresso     | varchar(30)   | The number of espresso shots selected |
| flavor     | varchar(30)   | The flavor shot selected |
| sweetener     | varchar(30)   | The sweetener selected |
| total    | integer  | The total price for the order |
| c_id    | integer  | The customer_id of the order|

## Team Contributions:

Meghana Jaladanki
- Worked on orders.html & orders.css files 
- Created login/signup pages 
- Deployed project onto heroku 

Rinija Raja
- Created the postgres database and connected it to the Heroku app
- Created both the customer and order tables
- Created database.js where new records are added, deleted, updated, and read to both databases
- Worked on options.js and orders.js to display the data and save data retrieved from the users

Mehul Ramaswami
- Worked on database and tried to get Postgres integration working

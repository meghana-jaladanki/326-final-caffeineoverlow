import 'dotenv/config';
import pg from 'pg';

// get pool class from the pg module
const { Pool } = pg;

export class CaffeineDatabase {
    constructor(dburl){
        this.dburl = dburl;
    }

    async connect(){
        this.pool = new Pool({
            connectionString: this.dburl,
            ssl: {rejectUnauthorized: false},
        });

        this.client = await this.pool.connect();

        // init the database
        //await this.init_customer();
        //await this.init_order();
    }

    // used to initialize customer table in database
    // async init_customer() {
    //     const queryText = `
    //     create table if not exists customer (
    //         customer_id integer primary key,
    //         username varchar(30),
    //         password varchar(30)
    //     );
      
    //     insert into 
    //         customer(customer_id, username, password) 
    //     values 
    //         (6, 'Grey', 'Test1234!'),
    //         (7, 'Sydney', 'Test1234!'),
    //         (8, 'Tarik', 'Test1234!');
    //     `;
    //     const res = await this.client.query(queryText);
    // }

    //used to initialize order table in database
    // async init_order() {
    //     const queryText = `
    //     create table if not exists order (
    //         order_id integer primary key, 
    //         drink varchar(30), 
    //         dairy varchar(30), 
    //         espresso varchar(30), 
    //         flavor varchar(30), 
    //         sweetener varchar(30), 
    //         total integer
    //     );
      
    //     insert into 
    //         order(order_id, drink, dairy, espresso, flavor, sweetener, total) 
    //     values 
    //         (12, 'Latte', 'Milk', '1', 'Vanilla', 'Sugar', 5),
    //         (13, 'Latte', 'Milk', '1', 'Vanilla', 'Sugar', 5),
    //         (14, 'Latte', 'Milk', '1', 'Vanilla', 'Sugar', 5);
    //     `;
    //     const res = await this.client.query(queryText);
    // }

    // close the pool
    async close(){
        this.client.release();
        await this.pool.end();
    }

    // CREATE/POST newCustomer
    async createCustomer(customer_id, username, password) {
        const queryText =
        'INSERT INTO customer (customer_id, username, password) VALUES ($1, $2, $3) RETURNING *;';
        const res = await this.client.query(queryText, [customer_id, username, password]);
        console.log(res.rows);
        return res.rows;
    }

    // CREATE/POST newOrder
    async createOrder(order_id, drink, dairy, espresso, flavor, sweetener, total) {
        const queryText =
        'INSERT INTO order (order_id, drink, dairy, espresso, flavor, sweetener, total) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;';
        const res = await this.client.query(queryText, [order_id, drink, dairy, espresso, flavor, sweetener, total]);
        console.log(res.rows);
        return res.rows;
    }

    // GET/READ viewCustomer
    async readCustomer() {
        const queryText = 'SELECT * FROM customer;';
        const res = await this.client.query(queryText);
        return res.rows;
    }

    // GET/READ viewOrder
    async readOrder() {
        const queryText = 'SELECT * FROM order;';
        const res = await this.client.query(queryText);
        return res.rows;
    }
}
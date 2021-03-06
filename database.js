import "dotenv/config";
import pg from "pg";

// get pool class from the pg module
const { Pool } = pg;

export class CaffeineDatabase {
  constructor(dburl) {
    this.dburl = dburl;
  }

  async connect() {
    this.pool = new Pool({
      connectionString: this.dburl,
      ssl: { rejectUnauthorized: false },
    });

    this.client = await this.pool.connect();

    // init the database
    //await this.init_customer();
    //await this.init_order();
  }

  // used to initialize customer table in database
  async init_customer() {
    const queryText = `
      create table if not exists customers (
          customer_id SERIAL primary key,
          email varchar(30)
      );

      insert into customers(email)
      values
          ('hello@gmail.com'),
          ('crazy@gmail.com'),
          ('happy@gmail.com');
      `;
    const res = await this.client.query(queryText);
  }

  //used to initialize order table in database
  async init_order() {
    const queryText = `
      create table if not exists orders (
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

      insert into
          orders (c_id, drink, dairy, espresso, flavor, sweetener, total)
      values
          (1, 'Latte', 'Milk', '1', 'Vanilla', 'Sugar', 5),
          (2, 'Latte', 'Milk', '1', 'Vanilla', 'Sugar', 5),
          (3, 'Latte', 'Milk', '1', 'Vanilla', 'Sugar', 5);
      `;
    const res = await this.client.query(queryText);
  }

  // close the pool
  async close() {
    this.client.release();
    await this.pool.end();
  }

  // CREATE/POST newCustomer
  async createCustomer(email) {
    const queryText =
      "INSERT INTO customers (email) VALUES ($1) RETURNING customer_id;";
    const res = await this.client.query(queryText, [
        customer_id,
        email,
    ]);
    return res.rows;
  }

  // CREATE/POST newOrder
  async createOrder(
    customer_id,
    drink,
    dairy,
    espresso,
    flavor,
    sweetener,
    total
  ) {
    const queryText =
      "INSERT INTO orders (c_id, drink, dairy, espresso, flavor, sweetener, total) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING order_id;";
    const res = await this.client.query(queryText, [
      customer_id,
      drink,
      dairy,
      espresso,
      flavor,
      sweetener,
      total,
    ]);
    return res.rows;
  }

  // GET/READ viewCustomer
  async readCustomers() {
    const queryText = "SELECT * FROM customer;";
    const res = await this.client.query(queryText);
    return res.rows;
  }

  // GET/READ viewOrder
  async readOrders() {
    const queryText = "SELECT * FROM orders;";
    const res = await this.client.query(queryText);
    return res.rows;
  }

  // UPDATE updateOrder
  async updateOrder(order_id, drink, dairy, espresso, flavor, sweetener) {
    const queryText =
      'UPDATE orders SET drink = $2, dairy = $3, espresso = $4, flavor = $5, sweetener = $6 WHERE id = $1 RETURNING *';
    const res = await this.client.query(queryText, [order_id, drink, dairy, espresso, flavor, sweetener]);
    return res.rows;
  }

  // DELETE deleteOrder
  async deleteOrder(order_id) {
    const queryText = 'DELETE FROM orders WHERE order_id = $1 RETURNING *';
    const res = await this.client.query(queryText, [order_id]);
    return res.rows;
  }

  // DELETE deleteCustomer
  async deleteCustomer(customer_id) {
    const queryText = 'DELETE FROM customers WHERE customer_id = $1 RETURNING *';
    const res = await this.client.query(queryText, [customer_id]);
    return res.rows;
  }
}

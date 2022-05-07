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
    // await this.init_customer();
    // await this.init_order();
  }

  // used to initialize customer table in database
  async init_customer() {
    const queryText = `
      create table if not exists customers (
          customer_id SERIAL primary key,
          username varchar(30),
          password varchar(30)
      );

      insert into customers(username, password)
      values
          ('Grey', 'Test1234!'),
          ('Sydney', 'Test1234!'),
          ('Tarik', 'Test1234!');
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
          (1, 'Latte', 'Milk', '1', 'Vanilla', 'Sugar', 5),
          (2, 'Latte', 'Milk', '1', 'Vanilla', 'Sugar', 5);
      `;
    const res = await this.client.query(queryText);
  }

  // close the pool
  async close() {
    this.client.release();
    await this.pool.end();
  }

  // CREATE/POST newCustomer
  async createCustomer(customer_id, username, password) {
    const queryText =
      "INSERT INTO customers (username, password) VALUES ($1, $2) RETURNING customer_id;";
    const res = await this.client.query(queryText, [
      customer_id,
      username,
      password,
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
}

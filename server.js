import express from "express";
import { CaffeineDatabase } from "./database.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
class CaffeineServer {
  constructor(dburl) {
    this.dburl = dburl;
    this.app = express();
    this.app.use("/", express.static("client"));
  }

  async initRoutes() {
    const self = this;

    // GET/READ endpoints
    this.app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/html/login.html"));
    });
    
    this.app.get("/menu", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/html/menu.html"));
    });
    
    this.app.get("/orders", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/html/orders.html"));
    });
    
    this.app.get("/options", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/html/options.html"));
    });
    
    this.app.get("/viewCustomer", async (req, res) => {
      try {
        const customer = await self.db.readCustomer();
        res.send(JSON.stringify(customer));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.get("/viewOrder", async (req, res) => {
      try {
        const order = await self.db.readOrder();
        res.send(JSON.stringify(order));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    // this.app.get("/login", async (req, res) => {
    //   try {
    //     const words = await self.db.readWord();
    //     res.send(JSON.stringify(words));
    //   } catch (err) {
    //     res.status(500).send(err);
    //   }
    // });

    // this.app.get("/logout", async (req, res) => {
    //   try {
    //     const words = await self.db.readWord();
    //     res.send(JSON.stringify(words));
    //   } catch (err) {
    //     res.status(500).send(err);
    //   }
    // });

    // CREATE/POST endpoints
    this.app.post("/newCustomer", async (req, res) => {
      try {
        const { customer_id, username, password } = req.query;
        const customer = await self.db.createCustomer(customer_id, username, password);
        res.send(JSON.stringify(customer));
      } catch (err) {
        res.status(500).send(err);
      }
    });

    this.app.post("/newOrder", async (req, res) => {
      try {
        const { order_id, drink, dairy, espresso, flavor, sweetener, total } = req.query;
        const order = await self.db.createOrder(order_id, drink, dairy, espresso, flavor, sweetener, total);
        res.send(JSON.stringify(order));
      } catch (err) {
        res.status(500).send(err);
      }
    });

  }

  async initDb() {
    this.db = new CaffeineDatabase(this.dburl);
    await this.db.connect();
  }

  async start() {
    await this.initRoutes();
    await this.initDb();
    const port = process.env.PORT || 3000;
    this.app.listen(port, () => {
      console.log(`Caffeine Overflow Server listening on port ${port}!`);
    });
  }
}

const server = new CaffeineServer(process.env.DATABASE_URL);
server.start();
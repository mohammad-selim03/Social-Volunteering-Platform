const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const pool = require("../config/db");
const authRoutes = require("./authRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Authentication Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("HandsOn Backend is Running!");
});

app.post('/events', async (req, res) => {
    const { title, description, date, location, category, user_id } = req.body;
    
    // Ensure the user is logged in (we'll be using JWT token for this)
    if (!user_id) {
      return res.status(400).json({ error: 'User ID is required' });
    }
  
    try {
      const query = `
        INSERT INTO events (title, description, date, location, category)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
      `;
      const values = [title, description, date, location, category];
  
      const result = await pool.query(query, values);
      res.status(201).json(result.rows[0]); // Return the created event details
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating event' });
    }
  });

  app.get('/events', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM events ORDER BY date ASC');
      res.status(200).json(result.rows); // Return all events
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching events' });
    }
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

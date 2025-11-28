// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 4000; // agar change karna ho to yahan badlo

// in-memory store: { userId: { lat, lng, timestamp } }
const locations = {};

// health
app.get('/', (req, res) => res.send('GPS backend running'));

// update location
app.post('/update-location', (req, res) => {
  const { userId, lat, lng, timestamp } = req.body;
  if (!userId || lat === undefined || lng === undefined) {
    return res.status(400).json({ error: 'userId, lat and lng required' });
  }
  locations[userId] = { lat: Number(lat), lng: Number(lng), timestamp: timestamp || Date.now() };
  return res.json({ ok: true, stored: locations[userId] });
});

// get latest location for a user
app.get('/get-location/:userId', (req, res) => {
  const u = req.params.userId;
  if (!locations[u]) return res.status(404).json({ error: 'no location for this user' });
  return res.json(locations[u]);
});

// list all (debug)
app.get('/all-locations', (req, res) => res.json(locations));

app.listen(PORT, () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});

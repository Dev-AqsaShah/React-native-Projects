// backend/simulate.js
const axios = require('axios');

const SERVER = 'http://10.105.245.218:3000'; // <-- yahan apni machine IP daalna (e.g. http://192.168.1.5:3000)
const userId = 'sim_user_1';

// starting point (adjust)
let lat = 24.8607;
let lng = 67.0011;

async function send() {
  try{
    await axios.post(`${SERVER}/update-location`, {
      userId,
      lat,
      lng,
      timestamp: Date.now()
    });
    console.log('sent', {lat, lng});
  }catch(e){
    console.error('err', e.message);
  }

  // change coords slightly to simulate movement
  lat += (Math.random() - 0.5) * 0.0005;
  lng += (Math.random() - 0.5) * 0.0005;
}

setInterval(send, 3000);
send();

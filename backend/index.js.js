const express = require('express');
const cors = require('cors'); 
const app = express();
require('dotenv').config();

const auth_routes = require('./routes/auth_route');
const contact_route = require('./routes/contect_route'); 
const connectToDb = require('./utils/db'); 
const serivce_route = require('./routes/service_route'); // Make sure the path and name are correct
const Admin_route=require('./routes/Admin_route')

connectToDb();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', auth_routes);
app.use('/api/form', contact_route);
app.use('/api/data', serivce_route); // This mounts the `/service` route under `/api/data`
app.use('/api/admin',Admin_route)

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

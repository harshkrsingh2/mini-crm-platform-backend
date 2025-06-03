const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/customers', customerRoutes);
const openAiRoutes = require('./routes/openAiRoutes'); // or similar
app.use('/api/ai', openAiRoutes);

module.exports = app;

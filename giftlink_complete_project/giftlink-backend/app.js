const express = require('express');
const app = express();
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.use(express.json());
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

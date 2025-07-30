const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

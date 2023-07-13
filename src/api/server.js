const app = require('./app');

const port = process.env.PORT || 3000;
const database = process.env.MYSQL_DATABASE || 'database_development';

app.listen(port, () => {
  console.log(`Server listening on port ${database} ${port}`);
});

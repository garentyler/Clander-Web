// Create the app.
const app = require('express')();
// Import dependencies.
const helmet = require('helmet');
const compression = require('compression');
// Configure dependencies.
app.use(helmet());
app.use(compression());
app.set('json spaces', 2);
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views/`);

// The routes.
app.get('/', (req, res) => {
  res.render('index');
});

// Serve static files.
app.get('/favicon.ico', (req, res) => {
  res.status(404);
});
app.get('/css/:file', (req, res) => {
  res.sendFile(`${__dirname}/public/css/${req.params.file}`);
});

// Listen.
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

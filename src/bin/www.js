const app = require('../index.js');

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT));

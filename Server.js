const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/search', async (req, res) => {
  const { keyword, maxPrice, location } = req.body;

  // Itt jönne a scraping/lekérdezés
  console.log(`Keresés: ${keyword}, Max ár: ${maxPrice}, Hely: ${location}`);

  // Dummy válasz (egyelőre)
  res.send(`<h2>Eredmények a "${keyword}" kulcsszóra (${location} - max ${maxPrice} Ft):</h2>
    <ul>
      <li>Pl. "iPhone 15" - 250.000 Ft - Budapest</li>
    </ul>`);
});

app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});

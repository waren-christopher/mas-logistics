const https = require('https');
const fs = require('fs');
const path = require('path');

const url = "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-cargo-ship-in-the-sea-15501-large.mp4";
const dest = path.join(__dirname, 'public', 'images', 'video.mp4');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

const file = fs.createWriteStream(dest);

https.get(url, options, response => {
  if (response.statusCode === 301 || response.statusCode === 302) {
    https.get(response.headers.location, options, res2 => {
      res2.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Download completed from redirect.');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download completed.');
    });
  }
}).on('error', err => {
  fs.unlink(dest, () => {});
  console.error(err.message);
});

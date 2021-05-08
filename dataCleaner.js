const fs = require('fs');
const csv = require('fast-csv');

const newRow = ({ id, styleId, url, thumbnail_url }) => {
  if (!thumbnail_url) {
    const thumbnail_url = null;
  }
  return {
    id: Number(id),
    styleId: Number(styleId),
    url: url,
    thumbnail_url: thumbnail_url
  };
};

const newcsv = fs.createWriteStream('./SDCdata/cleanedPhotoData.csv', {flags: 'a'});
const outputToFile = csv.format({ headers: true, quote: false });
outputToFile.pipe(newcsv);

var rawcsv = fs.createReadStream('./SDCdata/photos.csv');
  rawcsv.pipe(csv.parse({ headers: true, quote: null}))
  .on('error', error => console.error(error))
  .on('data', row => {
    const outputRow = newRow(row);
    outputToFile.write(outputRow);
  })
  .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));
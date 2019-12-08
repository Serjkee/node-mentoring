import fs from 'fs';
import csv from 'csvtojson';

const csvFilePath = './csv/data.csv';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    jsonObj.map((line, index) => {
      fs.appendFileSync('task2.txt', JSON.stringify(line) + '\n', 'utf8', (error) => {
        if (error) console.log('Something went wrong!');
        console.log(`The line with index ${index} has been successfully written!`);
      });
    });
  });

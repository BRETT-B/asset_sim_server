const Table   = require('cli-table');

var table = new Table({
    head: ['Site Name', 'Site ID'],
    colWidths: [30, 10],
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
});
table.push(
  ['BLS - ABS9', 9],
  ['BLS - PMD', 19],
  ['BLS - ByteLight', 59],
  ['Ian Testing', 61],
  ['BLS - Acuity Retail Vignette', 67],
  ['BLS - ShopTalk', 68],
  ['BLS - eldoLED', 88],
  ['BLS - LightFair', 89],
  ['BLS - Starburst - Store 1', 95],
  ['Future Mart Store 1', 100],
  ['ABLS 9 Model', 99],
  ['Geometri - Birmingham', 57],
  ['Geometri - Michigan', 58],
  ['Miami Test Site', 75],
  ['Geometri - Boise', 82],
  ['GRG DEMO', 85],
  ['485', 92],
  ['994', 98],
  ['New Site', 70],
  ['Tj Sites', 81],
  ['2313', 62],
  ['2189', 63],
  ['1375', 64],
  ['1197', 65],
  ['9348', 66]
);

module.exports = table;

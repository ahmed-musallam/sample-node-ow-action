var moment = require('moment');

function simpleDateAction() {
  return { date: moment().day(0).format("YYYY-MM-DD") };
}

global.main = simpleDateAction
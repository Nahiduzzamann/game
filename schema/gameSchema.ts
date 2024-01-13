import mongoose from 'mongoose';
const { Schema } = mongoose;

const users = new Schema({
  name: String, // String is shorthand for {type: String}
  password: String,
  username: { type: String, unique: true },
  phone: { type: String, length: 11 },
  date: { type: Date, default: Date.now },

});
const gameList = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  name_cn: {
    type: String
  },
  name_kr: {
    type: String
  },
  img: {
    type: String
  },
  label: {
    type: String
  },
  device: {
    type: Date
  },
  title: {
    type: String
  },
  categories: {
    type: String
  },
  flash: String,
  vertical: String,
  bm: String,
  demo: String,
  localhost: String,
  rewriterule: String,
  lines: String,
  width: String,
  wager: String,
  bonus: String,
  exitButton: String,
  disableReload: String,
  menu: String,
  system_name2: String
})
const games = new Schema({
  status: {
    type: String
  },
  microtime: {
    type: Number
  },
  dateTime: {
    type: Date
  },
  error: {
    type: String
  },
  content: {
    gameLabels: {
      type: [
        String
      ]
    },
    gameTitles: {
      type: [
        String
      ]
    },
    gameList: {
      type: [
        gameList
      ]
    }
  }
})
export { users,games }
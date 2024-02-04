import mongoose from "mongoose";
const { Schema } = mongoose;

const promotionHistory = new Schema({
  promotionId: String,
  userId: String,
  date: { type: Date, default: Date.now() },
  completed: { type: Boolean, default: false },
});

const promotions = new Schema({
  title: String,
  description: String,
  image: String,
  details: { type: String, default: null },
  bonusPercentage: Number,
  turnOverAmount: Number,
  applicable: { type: Boolean, default: false },
});
const bonusHistory = new Schema({
  date: { type: Date, default: Date.now() },
  userId: String,
  amount: Number,
  promotionId: String,
});

const deposit = new Schema({
  walletId: { type: String, require: true },
  amount: { type: Number, require: true },
  promotionId: { type: String, require: false },
  date: { type: Date, default: Date.now() },
  status: { type: String, default: "PENDING" },
  remarks: { type: String, default: "-" },
  tranXId: String,
  userId: String,
});
const withdraw = new Schema({
  walletId: { type: String, require: true },
  amount: { type: Number, require: true },
  date: { type: Date, default: Date.now() },
  status: { type: String, default: "PENDING" },
  remarks: { type: String, default: "-" },
  userId: { type: String, default: null },
});
const transfer = new Schema({
  paymentMethod: { type: String, require: true },
  amount: { type: Number, require: true },
  date: { type: Date, default: Date.now() },
  status: { type: String, default: "PENDING" },
  tranXId: String,
  fromWalletId: String,
  toWalletId: String,
});
const rewardsHistory = new Schema({
  tranXId: String,
  date: { type: Date, default: Date.now() },
  balanceAt: Number,
  amount: Number,
  rewardsId: String,
});
const rewardsList = new Schema({
  level: String,
  targetTurnover: Number,
  bonusAmount: Number,
});
const voucher=new Schema({
  userId:{type:String,default:""},
  bonusAmount:Number,
  applied:{type:Boolean,default:false},
  code:String
})
const userWallets = new Schema({
  walletNumber: { type: String, require: true },
  walletId: { type: String, require: true },
  channel: { type: String, default: "Dpay" },
  userId: String,
});
const wallets = new Schema({
  methodName: String,
  icon: String,
  slogan: String,
  walletNumber: { type: String, require: true },
});
const users = new Schema({
  name: String, // String is shorthand for {type: String}
  password: String,
  username: { type: String, unique: true },
  phone: { type: String, length: 11 },
  date: { type: Date, default: Date.now },
  balance: { type: Number, default: 0 },
});
const gameHistory = new Schema({
  bet: Number,
  win: Number,
  date: { type: Date, default: Date.now },
  username: String,
  gameId: String,
  id: Number,
});
const notification = new Schema({
  date: { type: Date, default: Date.now() },
  title: String,
  details: String,
});
const gameList = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  name_cn: {
    type: String,
  },
  name_kr: {
    type: String,
  },
  img: {
    type: String,
  },
  label: {
    type: String,
  },
  device: {
    type: Date,
  },
  title: {
    type: String,
  },
  categories: {
    type: String,
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
  system_name2: String,
});
const games = new Schema({
  status: {
    type: String,
  },
  microtime: {
    type: Number,
  },
  dateTime: {
    type: Date,
  },
  error: {
    type: String,
  },
  content: {
    gameLabels: {
      type: [String],
    },
    gameTitles: {
      type: [String],
    },
    gameList: {
      type: [gameList],
    },
  },
});
export {
  users,
  games,
  gameHistory,
  wallets,
  userWallets,
  rewardsHistory,
  rewardsList,
  transfer,
  withdraw,
  deposit,
  bonusHistory,
  promotions,
  promotionHistory,
  notification,
  voucher
};

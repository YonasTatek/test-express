const express = require("express");
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const router = express.Router();
const TELEGRAM_API_TOKEN = '7206732955:AAHVIF1YtreRJByr1aHH07079CBYThNF8RA';
const TELEGRAM_CHANNEL_ID = '#-2191218009'; 
const bot =  new Telegraf(TELEGRAM_API_TOKEN);


router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});
router.post("/", async (req, res, next) => {
  try{
    await bot.telegram.sendMessage("@mennacenter",JSON.stringify(req.body))
 }catch(error){
     console.log(error)

 }
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

module.exports = router;

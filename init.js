const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("connection succussfully:");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
const Chat = require("./models/chat.js");
const chats= [
    {
      from: "Amit",
      to: "Microsoft",
      msg: "Hi, Amit here. Please consider me!",
      current_at: new Date()
    },
    {
      from: "Priya",
      to: "Google",
      msg: "Hello, I'm Priya. Hire me, Google!",
      current_at: new Date()
    },
    {
      from: "Rahul",
      to: "Apple",
      msg: "Rahul here. Interested in Apple.",
      current_at: new Date()
    },
    {
      from: "Neha",
      to: "Amazon",
      msg: "Hi Amazon, Neha here. Let's talk.",
      current_at: new Date()
    },
    {
      from: "Sandeep",
      to: "Facebook",
      msg: "Sandeep here. Facebook, I'm ready!",
      current_at: new Date()
    },
    {
      from: "Deepika",
      to: "Netflix",
      msg: "Deepika interested in Netflix roles.",
      current_at: new Date()
    },
    {
      from: "Vikram",
      to: "Tesla",
      msg: "Hi Tesla, Vikram here. Let's connect!",
      current_at: new Date()
    },
    {
      from: "Ananya",
      to: "Twitter",
      msg: "Ananya here. Twitter, consider me!",
      current_at: new Date()
    },
    {
      from: "Arjun",
      to: "LinkedIn",
      msg: "Arjun interested in LinkedIn.",
      current_at: new Date()
    },
    {
      from: "Kavita",
      to: "Uber",
      msg: "Kavita ready to join Uber.",
      current_at: new Date()
    }
  ];
Chat.insertMany(chats);
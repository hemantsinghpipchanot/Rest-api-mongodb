const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
main()
  .then(() => {
    console.log("connection succussfully:");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
const Chat = require("./models/chat.js");
//To show chats
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});
//to add new chat
app.get("/chats/new", (req, res) => {
  res.render("create.ejs");
});
app.post("/chats", (req, res) => {
  const { from, msg, to } = req.body;
  const chat = new Chat({
    from: from,
    msg: msg,
    to: to,
    current_at: new Date(),
  });
  chat
    .save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  res.redirect("/chats");
});
//to edit the message
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});
app.put("/chats/:id", async(req, res) => {
  let { id} = req.params;
  let {msg}=req.body;
  await Chat.findByIdAndUpdate(id, { msg: msg },{runValidators:true,new:true});
  res.redirect("/chats");
});
//to delete the message
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    await  Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});
app.get("/", (req, res) => {
  res.send("success");
});
app.listen(port, () => {
  console.log(`Server is listening to port:${port}`);
});

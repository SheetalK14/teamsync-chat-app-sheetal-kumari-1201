const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/teamsync", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// Import models
const User = require("./models/User");
const Channel = require("./models/Channel");
const Message = require("./models/Message");

// Routes

// User registration
app.post("/api/auth/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a channel
app.post("/api/channel", async (req, res) => {
    try {
        const { name, description } = req.body;
        const channel = new Channel({ name, description });
        await channel.save();
        res.status(201).json(channel);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Send a message
app.post("/api/message", async (req, res) => {
    try {
        const { channelId, senderId, text } = req.body;
        const message = new Message({
            channel: channelId,
            sender: senderId,
            text: text,
        });
        await message.save();
        res.status(201).json(message);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all messages of a channel
app.get("/api/message/:channelId", async (req, res) => {
    try {
        const messages = await Message.find({ channel: req.params.channelId }).populate("sender", "name");
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));

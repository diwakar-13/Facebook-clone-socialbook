import express from "express";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix __dirname for ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"), { index: false }));  // Serve HTML, CSS, JS index: false tells Express “Do NOT auto-open index.html”

// TEMP storage for signup data (no database)
let savedEmail = null;
let savedPassword = null;

// Default route → show login page
app.get("/", (req, res) => {
    res.redirect("/login.html");
});

// Signup route
app.post("/signup", (req, res) => {
    const { email, password } = req.body;

    savedEmail = email;
    savedPassword = password;

    console.log("Signup OK:", savedEmail);

    res.redirect("/login.html");
});

// Login route
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === savedEmail && password === savedPassword) {
        console.log("Login OK");
        return res.redirect("/index.html");
    }

    res.send("❌ Wrong email or password.");
});

// logout
app.get("/logout", (req, res) => {
    //clear the data
    savedEmail = null;
    savedPassword = null;

    console.log("User logged out");

    // redirect to login page

    res.redirect("/login.html");
})





// Start server
app.listen(3000, () => {
    console.log("Server running at → http://localhost:3000");
});

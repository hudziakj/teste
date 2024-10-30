const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Firebase Functions!");
});

// Exporta o app como uma function
exports.app = functions.https.onRequest(app);

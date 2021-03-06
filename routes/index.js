const router = require("express").Router();
const path = require("path");

// API routes for server
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// Add routes for html files
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../../public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "../../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "../../public/stats.html"));
});

module.exports = router;
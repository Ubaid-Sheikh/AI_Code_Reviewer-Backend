const express = require("express");
const router = express.Router();
const { AI_POST_controller, AI_GET_controller } = require("../controllers/ai.controller")

router.post("/get-response", AI_POST_controller);

router.get("/get-response", AI_GET_controller);

module.exports = router;

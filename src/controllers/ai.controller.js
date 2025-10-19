const createContent = require("../services/ai.service")
module.exports = {
    AI_POST_controller: async (req, res) => {
        try {
            console.log("Request Body:", req.body.prompt);
            const prompt = req.body.prompt;

            if (!prompt || typeof prompt !== "string") {
                return res.status(400).json({ error: "Prompt must be a valid string" });
            }

            const result = await createContent(prompt);
            console.log("AI Response:", result);

            res.json({ result });
        } catch (error) {
            console.error("Error in /get-response:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    AI_GET_controller: (req, res) => {
        res.send({ result: "Get is Working" })
    }
}
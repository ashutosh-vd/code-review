import askAi from "../utils/askAi.js";

export const submitPromptController = async (req, res) => {
  const {prompt} = req.body;
  const result = await askAi({prompt});
  res.status(202).json({"answer": result});
};
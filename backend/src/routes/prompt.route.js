import { Router } from "express";
import { submitPromptController } from "../controllers/prompt.controller.js";

const router = Router();

router.post('/', submitPromptController)

export default router;
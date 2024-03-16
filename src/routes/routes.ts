import express from "express";
import * as hooksController from '../controllers/webhooks_controller'

export const router = express.Router();

router.get("/", (req, res) => res.send("Welcome to the Slachub API!"));
router.post("/hooks", hooksController.handleWebhook);

router.post('/send-message-to-slack',hooksController.sendToSlack);

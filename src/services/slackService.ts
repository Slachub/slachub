import { NextFunction, Response, Request } from "express";
import { Webhook } from "../models/webhook_model";
import axios from "axios";


export const updateToSlack = async (payload: String) => {
    try {
      const slackWebhookUrl = 'https://hooks.slack.com/services/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';
      await axios.post(slackWebhookUrl, {
        text: `New webhook data received: ${JSON.stringify(payload)}`        
      });
      console.log('Data sent to Slack successfully');
      return true
    } catch (error) {
      throw new Error('Failed to send data to Slack');
    }
  }

 
  
 
  



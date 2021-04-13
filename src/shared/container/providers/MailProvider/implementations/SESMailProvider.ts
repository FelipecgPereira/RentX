import { injectable } from "tsyringe";
import { IMailProvider } from "../IMailProvider";
import {SES} from "aws-sdk";
import nodemailer,{Transporter} from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

@injectable()
class SESMailProvider implements IMailProvider{
    private client :Transporter;
    
    constructor(){
       this.client = nodemailer.createTransport({
           SES: new SES({
            apiVersion: "2010-12-01",
            region: process.env.AWS_REGION,
           })
       })
    }

   async sendMail(to: string, subject: string, variables: string, path: string): Promise<void> {
        
    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const templateParse = handlebars.compile(templateFileContent);
    const templateHTML = templateParse(variables);
    
     await this.client.sendMail({
            to,
            from:"Rentx <api@apidevtest.com>",
            subject,
            html: templateHTML
        })


     
    }
}

export{SESMailProvider}
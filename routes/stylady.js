import express from "express";
import { createLogin, createApplication } from "../controller/stylady.js";
const stylady = express.Router();

// stylady.get("/", getApplication);
stylady.post("/", createApplication);
stylady.post("/", createLogin);
 
export default stylady;

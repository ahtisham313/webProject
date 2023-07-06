import express from "express";
import { createLogin, } from "../controller/login.js";
const login = express.Router();

// stylady.get("/", getApplication);
// stylady.post("/", createApplication);
login.post("/", createLogin);
 
export default login;


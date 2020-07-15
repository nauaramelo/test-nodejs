import express from "express";
import { ProductController } from "../controller/ProductController";

export const productRouter = express.Router();

productRouter.post("/", new ProductController().createProduct)
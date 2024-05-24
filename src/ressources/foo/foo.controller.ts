import { Router } from "express";
import { FooService } from "./foo.service";
import { Exception } from "../../utils/exceptions";

const FooController = Router();

const service: FooService = new FooService();


FooController.get('/test', async (req,res) => {
    try {
        const response = service.test();
        return res.status(200).json(response);
    } catch (err: any) {
        return res.status(400).json(err);
    }
});

export { FooController };
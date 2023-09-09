import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/test", (req: Request, res: Response) => {
	res.send({ message: "successful" });
});

export default app;

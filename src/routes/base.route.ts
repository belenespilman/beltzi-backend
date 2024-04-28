import { Router, Request, Response } from 'express';

const baseRouter: Router = Router();

baseRouter.get('/health', (_req: Request, res: Response) => {
    res.send('Server is Up')
})

export { baseRouter } 
import { Router } from 'express';
import { baseRouter } from './base.route';

const v1Router: Router = Router();

v1Router.use(baseRouter)

export {v1Router};

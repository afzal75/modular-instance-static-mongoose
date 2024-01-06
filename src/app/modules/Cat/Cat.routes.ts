import express from 'express'
import { CatController } from './Cat.controller';

const router = express.Router();

router.post('/create-cat', CatController.createCat)

export const CatRoutes = router;
import { Router } from 'express';
import { ExampleController } from './example.controller';
import { exampleSchema } from './example.schema';
import { bodyValidator } from '../../../middleware/validate.middleware';

export class ExampleRoutes {
  router = Router();
  private exampleCtrl: ExampleController = new ExampleController();
  constructor() {
    /* this.router.get('/', this.exampleCtrl.getAllexample);

    this.router.post('/', [bodyValidator(exampleSchema)], this.exampleCtrl.createexample);

    this.router.put('/:id', [bodyValidator(exampleSchema)], this.exampleCtrl.updateexample);

    this.router.delete('/:id', this.exampleCtrl.deleteexample); */
  }
}

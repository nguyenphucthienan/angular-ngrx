import {Request, Response} from 'express';
import {COURSES} from './db-data';

export function deleteCourse(req: Request, res: Response) {
  const id = req.params['id'];
  delete COURSES[id];

  setTimeout(() => {
    res.status(200).json({id});
  }, 2000);
}

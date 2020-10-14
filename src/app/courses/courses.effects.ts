import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, map} from 'rxjs/operators';
import {CourseActions} from './action-types';
import {allCoursesLoaded} from './course.actions';
import {CoursesHttpService} from './services/courses-http.service';

@Injectable()
export class CoursesEffects {

  loadCourses$ = createEffect(() => this.action$.pipe(
    ofType(CourseActions.loadAllCourses),
    concatMap(action => this.coursesHttpService.findAllCourses()),
    map(courses => allCoursesLoaded({courses}))
  ));

  constructor(
    private action$: Actions,
    private coursesHttpService: CoursesHttpService
  ) {
  }
}

import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {AuthActions} from './action-types';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
  ), {dispatch: false});

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(action => localStorage.removeItem('user'))
  ), {dispatch: false});

  constructor(private actions$: Actions) {
  }

}

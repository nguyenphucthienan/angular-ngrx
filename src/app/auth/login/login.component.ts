import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {noop} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {login} from '../auth.actions';
import {AuthService} from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>) {
    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login() {
    const {email, password} = this.form.value;
    this.auth.login(email, password)
      .pipe(
        tap(user => {
          this.store.dispatch(login({user}));
          this.router.navigateByUrl('/courses');
        })
      )
      .subscribe(noop, () => alert('Login failed'));
  }

}

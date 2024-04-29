import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../login.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  constructor(private store: Store) {}

  login(event: any) {
    this.store.dispatch(login({
      username: event.target.username.value,
      password: event.target.password.value
    }))

    return false
  }
}
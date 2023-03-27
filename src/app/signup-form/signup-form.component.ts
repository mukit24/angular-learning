import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { usernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form : FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      username: ['', [Validators.required, usernameValidators.cannotContainSpace],usernameValidators.shouldBeUnique],
      password: ['', Validators.required]
    })
  }
  get username() {
    return this.form.get('username');
  }
}

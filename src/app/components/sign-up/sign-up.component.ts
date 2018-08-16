import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  profileurl = null;
  email = null;
  password = null;
  submitted = false;
  signUpForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.router = router;
    this.formBuilder = formBuilder;
  }
  get f() { return this.signUpForm.controls; }
  ngOnInit() {
      this.signUpForm = this.formBuilder.group({
          profileurl: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
      });
  }

  reDirectToLogin(): any{
    this.router.navigate(['/sign-in']);
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.signUpForm.invalid) {
          return;
      }
      this.router.navigate(['/sign-in']);
      // alert('SUCCESS!! :-)')
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  pubkey = null;
  privatekey = null;
  athenticatecode = null;
  signinForm: FormGroup;
  submitted = false;



  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.router = router;
    this.formBuilder = formBuilder;
  }

  ngOnInit() {
      this.signinForm = this.formBuilder.group({
          pubkey: ['', Validators.required],
          privatekey: ['', Validators.required],
          athenticatecode: ['', Validators.required],
      });
  }

  get f() {
    return this.signinForm.controls;
  }

  goToNext() {
    this.router.navigate(['/basic-info'])
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.signinForm.invalid) {
          return;
      }
      this.router.navigate(['/basic-info']);
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

    basicInfoForm: FormGroup;
    submitted = false;
    firstname = null;
    lastname = null;
    address = null;
    dob = null;

    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
    }
    get f() { return this.basicInfoForm.controls; }

    ngOnInit() {
        this.basicInfoForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            address: ['', Validators.required],
        });
    }

    goToPrevious() {
        this.router.navigate(['/sign-in']);
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.basicInfoForm.invalid) {
            return;
        }
        this.router.navigate(['/educational-details']);
        // alert('SUCCESS!! :-)')
    }

}

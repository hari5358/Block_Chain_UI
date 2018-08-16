import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {
    educationalForm: FormGroup;
    submitted = false;

    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
    }
    get f() { return this.educationalForm.controls; }

    ngOnInit() {
        this.educationalForm = this.formBuilder.group({
            instname1: ['', Validators.required],
            instname2: ['', Validators.required],
            passoutyear1: ['', Validators.required],
            instname3: ['', Validators.required],
            passoutyear2: ['', Validators.required],
            formyear: ['', Validators.required],
            toyear: ['', Validators.required],
            markssecured1: ['', Validators.required],
            markssecured2: ['', Validators.required],
            studyfield: ['', Validators.required],
        });
    }


    goToNext() {
        this.router.navigate(['/professional-details'])
    }

    goToPrevious() {
        this.router.navigate(['/basic-info']);
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.educationalForm.invalid) {
            return;
        }
        this.router.navigate(['/professional-details']);
        // alert('SUCCESS!! :-)')
    }

}

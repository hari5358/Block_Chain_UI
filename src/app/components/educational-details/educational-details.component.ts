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
    selectedFiles: File;
    url = 'assets/images/';
    selectedFile: File;
    educationalDetails: any;

    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
    }
    get f() { return this.educationalForm.controls; }

    ngOnInit() {
        this.educationalForm = this.formBuilder.group({
            instname1: ['', Validators.required],
            joinyear: ['', Validators.required],
            passoutyear1: ['', Validators.required],
            markssecured1: ['', Validators.required],
            grade: ['', Validators.required],
        });

        this.educationalDetails = [
            {

            }
        ]
    }

    addNewEducation() {
        const item = {

        };
        this.educationalDetails.push(item);

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

    onFileChanged(event) {
        this.selectedFile = event.target.files[0]
    }

    // image  upload

    onSelectFile(event) {
        this.selectedFiles = event.target.files;
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
                this.url = event.target.result;
            }
        }
    }


}

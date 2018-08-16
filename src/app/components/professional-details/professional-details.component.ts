import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
    professionalForm: FormGroup;
    submitted = false;
    selectedFiles: File;
    url = 'assets/images/';
    selectedFile: File;

    constructor(private router: Router, private formBuilder: FormBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
    }
    get f() { return this.professionalForm.controls; }

    ngOnInit() {
        this.professionalForm = this.formBuilder.group({
            title: ['', Validators.required],
            company: ['', Validators.required],
            location: ['', Validators.required],
            fromyear: ['', Validators.required],
            toyear: ['', Validators.required],
            description: ['', Validators.required],
        });
    }

  goToNext() {
      this.router.navigate(['/profile']);
  }

    goToPrevious() {
        this.router.navigate(['/educational-details']);
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.professionalForm.invalid) {
            return;
        }
        this.router.navigate(['/profile']);
        // alert('SUCCESS!! :-)')
    }


    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
    }


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

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

}

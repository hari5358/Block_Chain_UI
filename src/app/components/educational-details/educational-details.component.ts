import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {

    constructor(private router: Router) {
        this.router = router;
    }

    ngOnInit() {
    }

    goToNext() {
        this.router.navigate(['/professional-details'])
    }

    goToPrevious() {
        this.router.navigate(['/basic-info']);
    }

}

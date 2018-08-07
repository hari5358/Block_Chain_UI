import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

    constructor(private router: Router) {
        this.router = router;
    }

    ngOnInit() {
    }

    goToNext() {
        this.router.navigate(['/educational-details']);
    }

    goToPrevious() {
        this.router.navigate(['/sign-in']);
    }

}

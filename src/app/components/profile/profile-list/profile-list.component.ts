import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }
  addNewEduDetails() {
    this.router.navigate(['/educational-details']);
  }
  addNewProDetails() {
      this.router.navigate(['/professional-details']);
  }

  addNewSkills() {
      this.router.navigate(['/add-skills']);
  }

    goToWallet() {
      this.router.navigate(['/wallet'])
    }

}

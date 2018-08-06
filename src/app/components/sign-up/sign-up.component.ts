import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  profileurl = null;
  email = null;

  constructor(private router: Router) {
    this.router = router;

  }

  ngOnInit() {
  }

  reDirectToLogin(): any{
    this.router.navigate(['/sign-in']);
  }

}

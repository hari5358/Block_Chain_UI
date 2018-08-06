import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  pubkey = null;
  privateley = null;
  athenticatecode = null;

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  goToNext() {
    this.router.navigate(['/basic-info'])
  }

}

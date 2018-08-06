import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  constructor(private router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  backRedirect() {
  }

}

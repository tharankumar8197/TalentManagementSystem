import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  
   bubble= true;
  constructor( private router: Router) { }

  navigatetoEdit(){
    this.bubble = false;
    this.router.navigate(['EditPersonal']);
  }

  ngOnInit(): void {
  }

}

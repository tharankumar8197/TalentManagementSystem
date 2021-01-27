import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  
   bubble= false;
  constructor( private router: Router) { }

  navigatetoEdit(){
    this.bubble = true;
    this.router.navigate(['Edit']);
  }

  ngOnInit(): void {
  }

}

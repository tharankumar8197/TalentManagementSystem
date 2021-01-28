import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career-overview',
  templateUrl: './career-overview.component.html',
  styleUrls: ['./career-overview.component.css']
})
export class CareerOverviewComponent implements OnInit {

  bubble= true;
  constructor(private router: Router) { }

  navigatetoEdit(){
    this.bubble = false;
    this.router.navigate(['EditCareer']);
  }


  ngOnInit(): void {
  }

}

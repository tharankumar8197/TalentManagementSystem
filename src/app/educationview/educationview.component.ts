import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-educationview',
  templateUrl: './educationview.component.html',
  styleUrls: ['./educationview.component.css']
})
export class EducationviewComponent implements OnInit {
  bubble= true;


  constructor(private router: Router) { }
  navigatetoEdit(){
    this.bubble = false;
    this.router.navigate(['eduEdit']);
  }

  ngOnInit(): void {
  }

}

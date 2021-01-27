import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-additionalview',
  templateUrl: './additionalview.component.html',
  styleUrls: ['./additionalview.component.css']
})
export class AdditionalviewComponent implements OnInit {
  bubble= true;


  constructor(private router: Router) { }
  navigatetoEdit(){
    this.bubble = false;
    this.router.navigate(['additionalEdit']);
  }

  ngOnInit(): void {
  }

}

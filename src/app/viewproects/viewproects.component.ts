import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproects',
  templateUrl: './viewproects.component.html',
  styleUrls: ['./viewproects.component.css']
})
export class ViewproectsComponent implements OnInit {
  bubble= true;


  constructor(private router: Router) { }
  navigatetoEdit(){
    this.bubble = false;
    this.router.navigate(['projectEdit']);
  }


  ngOnInit(): void {
  }

}

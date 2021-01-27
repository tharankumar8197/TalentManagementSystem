import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcertifi',
  templateUrl: './viewcertifi.component.html',
  styleUrls: ['./viewcertifi.component.css']
})
export class ViewcertifiComponent implements OnInit {
  bubble= true;


  constructor(private router: Router) { }
  navigatetoEdit(){
    this.bubble = false;
    this.router.navigate(['CertificateEdit']);
  }

  ngOnInit(): void {
  }

}

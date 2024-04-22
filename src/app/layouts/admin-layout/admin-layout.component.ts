import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Service1Service } from 'app/services/service1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  constructor(public serv:Service1Service , private route:Router ){}
ngOnInit() { 
    if(this.serv.affAdmin !==true && this.serv.affSales!==true){
      alert('loginAccount Please')
     this.route.navigate(["/login"])
    }
   }
}

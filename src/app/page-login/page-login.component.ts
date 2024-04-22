import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Service1Service } from 'app/services/service1.service';
import { resolve4 } from 'dns';
@Component({
  selector: 'app-page-login',
  templateUrl: 'page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
 login=""
 password=""
 APIHOC="https://heart-of-carthage-dubai.com/backend/employer/login"

  constructor(public http:HttpClient, private router:Router,private serv:Service1Service) { }
   
  ngOnInit(): void {
    
  }
loginEmp(){
  var user={
    login:this.login,
    password:this.password
  }
  
     this.serv.login(this.APIHOC,user).subscribe(res=>{
      console.log(res)
      var ob:any
      ob=res
      if(ob.message==true){
        this.serv.getEmpById(ob.employer).subscribe(res=>{
          this.serv.employer=res
          if(this.serv.employer.login=="admin"){
            this.serv.affAdmin=true
            this.serv.affSales=false
            this.router.navigate(["/dashboard"])
          }
         else{
          this.serv.affSales=true
          this.serv.affAdmin=false
          this.router.navigate(["/dashSales"])
         }
          
        })
      }
      else{
        alert('password incorrect')
      }
     })

 }
}

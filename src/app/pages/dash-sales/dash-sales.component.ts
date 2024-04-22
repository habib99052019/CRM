import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Service1Service } from 'app/services/service1.service';
@Component({
  selector: 'app-dash-sales',
  templateUrl: 'dash-sales.component.html',
  styleUrls: ['./dash-sales.component.scss']
})
export class DashSalesComponent implements OnInit {
  NombreLeadsSales=0
  NombreAllLeads=0
  baseurl1="https://back23-vk2y.onrender.com/pub/NumberLeadsForSales"
  
  baseurl2="https://backendiheb.onrender.com/backend/user/all"
  
  constructor(public ht:HttpClient ,public serv1:Service1Service ){}
  checkLeadWebsite = ()=>{

    // ektib lcode mte3ik lina
                    
   this.serv1.posteGetLeadsSales(this.baseurl1,{employer:this.serv1.employer.login}).subscribe(res=>{
    var ob:any
    ob=res
    this.NombreLeadsSales=ob.length
   })
    

    //hedhi matna7ihech
    setTimeout(() => {
       this.checkLeadWebsite()
    }, 10000);
  }  
  ngOnInit(): void {
    this.serv1.posteGetLeadsSales(this.baseurl1,{employer:this.serv1.employer.login}).subscribe(res=>{
      var ob:any
      ob=res
      this.NombreLeadsSales=ob.length
     })
      this.checkLeadWebsite()
     this.ht.get(this.baseurl2).subscribe(res=>{
      console.log(res,"sad")
       var ob:any
       ob=res
       this.NombreAllLeads=ob.length  
    })
  }

}

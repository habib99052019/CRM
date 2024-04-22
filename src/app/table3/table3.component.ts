import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Service1Service } from 'app/services/service1.service';
import { resolve4 } from 'dns/promises';
@Component({
  selector: 'app-table3',
  templateUrl: 'table3.component.html',
  styleUrls: ['./table3.component.scss']
})
export class Table3Component implements OnInit {

  afNewLead=true
  baseurl1="https://back23-vk2y.onrender.com/pub/sales"
  baseurl2="https://back23-vk2y.onrender.com/pub/nonNouveaux"
  tab:any[]=[]
  tabEmp:any[]=[]
  idEmp
  constructor(public ht:HttpClient,public serv:Service1Service){}
 
  
  ngOnInit(){
      this.ht.post(this.baseurl1,{employer:this.serv.employer.login}).subscribe(res=>{
          var ob:any
          ob=res
          this.tab=ob
          this.tab=this.tab.reverse()
      })
     
     
     
  }
}


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-meeting-sales',
  templateUrl: 'meeting-sales.component.html',
  styleUrls: ['./meeting-sales.component.scss']
})
export class MeetingSalesComponent implements OnInit {

  lead:any
 tabMeet:any[]=[]
 tabHist:any[]=[]
 employer:any
 tabAncienLeads:any[]=[]
 leads=0
  constructor(public route:ActivatedRoute ,public ht:HttpClient) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'),'rr')
   this.ht.get('https://backendiheb2.onrender.com/backend/meet/employer/'+this.route.snapshot.paramMap.get('id')).subscribe(res=>{
    var ob:any
    ob=res
   
    this.tabMeet=ob
   
    
   })
   this.ht.get('https://backendiheb2.onrender.com/backend/employer/login/'+this.route.snapshot.paramMap.get('id')).subscribe(res=>{
    var ob:any
    ob=res
   
    this.employer=ob
   
    
   })
   this.ht.get("https://backendiheb2.onrender.com/backend/user/all").subscribe(res=>{
    var ob:any
    ob=res
    this.tabAncienLeads=ob
    this.leads=this.tabAncienLeads.filter(ele=>ele.employer==this.route.snapshot.paramMap.get('id')).length
    
 })
  }

}

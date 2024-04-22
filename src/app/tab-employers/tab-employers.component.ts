
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab-employers',
  templateUrl: 'tab-employers.component.html',
  styleUrls: ['./tab-employers.component.scss']
})
export class TabEmployersComponent implements OnInit {
 lead:any
 tabMeet:any[]=[]
 tabHist:any[]=[]
  constructor(public route:ActivatedRoute ,public ht:HttpClient) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'),'rr')
   this.ht.get('https://backendiheb2.onrender.com/backend/user/'+this.route.snapshot.paramMap.get('id')).subscribe(res=>{
    var ob:any
    ob=res
    this.tabHist=ob.historique
    this.tabMeet=ob.tableMeet
    this.tabHist=this.tabHist.reverse()
    this.tabMeet=this.tabMeet.reverse()
    this.lead=ob
   })
  }

}

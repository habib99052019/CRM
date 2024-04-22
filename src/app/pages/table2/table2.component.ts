import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service1Service } from 'app/services/service1.service';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-table2',
//   moduleId: module.id,
  templateUrl: 'table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit{
   loginSale=""
  public tableData1: TableData;
  public tableData2: TableData;
  public tabAncienLeads:any[]=[]
  public tabMeet:any[]=[]
  baseurl1="https://back23-vk2y.onrender.com/pub/nonNouveaux"
 // tabh=[{"_id":"65d5b82feaace763531452ab","name":"Jean kebbe","isFacebook":true,"isWebSite":false,"phone":"009613245553\n/+9613245553\n","isNouveaux":false,"email":"Jpaulkebbe@gmail.com","project":"facebook jvc","__v":0},{"_id":"65d617f4eaace763531452d9","name":"habib sadraoui","isFacebook":false,"isWebSite":true,"phone":"52028532","isNouveaux":false,"email":"ha9.0bib90@gmail.com","project":"invest","__v":0},{"_id":"65f568125c6723d2cd83f955","name":"Hussein Kayem","isFacebook":true,"isWebSite":false,"phone":"+96176754115\n76754115","isNouveaux":false,"email":"uu0769853@gmail.com","project":" jvc","__v":0},{"_id":"65f5710f0647674ce9a0889a","name":"habib sadraoui2","isFacebook":false,"isWebSite":true,"phone":"+97152028532","isNouveaux":false,"email":"ha9.0bib90@gmail.com","project":"Elysee Heights","__v":0,"dateLead":"Sat Mar 16 2024 10:14"}]
  tabLead:any[]=[]
  
  tabEmp:any[]=[]
  tabAnLeadsFilter:any[]=[]
  tabAncienLeadsToday:any[]=[]
  tabMeetToady:any[]=[]
  idEmp
  constructor(public ht:HttpClient,public serv:Service1Service){}
  affEmp(e:any){
     this.idEmp=this.tabEmp[e].login

  }
  Navigate(elem: HTMLElement,e:any ) {
    console.log(e, 'nn')    
    elem.scrollIntoView({ behavior: 'smooth' });
    this.loginSale=e
   this.tabAnLeadsFilter=this.tabAncienLeads.filter(em=>em.employer==e)
    }
    numberMeeting(e:any){
        return this.tabMeet.filter(em=>em.employer==e).length
    }
    numberMeetingToday(e:any){
        return this.tabMeetToady.filter(em=>em.employer==e && em.status=="1").length
    }
    numberMeetingTodayNo(e:any){
        return this.tabMeetToady.filter(em=>em.employer==e && em.status=="0").length
    }
  numberLedsNewEmp(e:any){
    return this.tabAncienLeads.filter(em=>em.employer==e  && e.color== "3" ).length
  }
  numberLedsAncEmp(e:any){
   
    return this.tabAncienLeads.filter(em=>em.employer==e).length
  
  }
  numberLedsAncEmpToday(e:any){
    return this.tabAncienLeadsToday.filter(em=>em.employer==e).length
  }
  addLeads(e:any){
      var lead=this.tabLead[e]
      lead.employer=this.idEmp
      lead.isNouveaux=false
    
      this.serv.updateLead(lead._id,lead).subscribe(res=>{
         var ob:any 
         ob=res
         if(ob.message==true){
          alert("true")
         }
      })

  }
  ngOnInit(){
   
      this.ht.get(this.baseurl1).subscribe(res=>{
          var ob:any
          ob=res
          this.tabLead=ob
          this.tabLead=this.tabLead.reverse()

          console.log( console.log(this.tabLead.filter(em=>em.employer=="devloppeur").length) ,"non nouveaux")
      })
      this.ht.get("https://heart-of-carthage-dubai.com/backend/employer/").subscribe(res=>{
          var ob:any
          ob=res
          this.tabEmp=ob
          
      })
      this.ht.get("https://backendiheb2.onrender.com/backend/user/all").subscribe(res=>{
      var ob:any
      ob=res
      this.tabAncienLeads=ob
      console.log(this.tabAncienLeads ,'rty')
   })
   this.ht.get("https://backendiheb2.onrender.com/backend/user/all/today").subscribe(res=>{
      var ob:any
      ob=res
      this.tabAncienLeadsToday=ob
      console.log(this.tabAncienLeads ,'rty')
   })
   this.ht.get("https://backendiheb2.onrender.com/backend/meet/all").subscribe(res=>{
    var ob:any
    ob=res
    this.tabMeet=ob
    
 })
 this.ht.get("https://backendiheb2.onrender.com/backend/meet/all/today/valide").subscribe(res=>{
    var ob:any
    ob=res
    this.tabMeetToady=ob
    
 })
      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
              ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
              ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
              ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };
  }
}


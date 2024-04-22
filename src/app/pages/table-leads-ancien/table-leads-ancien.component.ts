import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service1Service } from 'app/services/service1.service';
import { resolve4 } from 'dns/promises';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-table-leads-ancien',
  templateUrl: './table-leads-ancien.component.html',
  styleUrls: ['./table-leads-ancien.component.scss']
})
export class TableLeadsAncienComponent implements OnInit {

  myColorVaraible="red"
  redyNumber=0
  NumberIntested=0
  NumberNotIntested=0
  now=0
  thrixMonths=0
  sexMonths=0
  tab:any[]=[]
  baseurl2="https://backendiheb2.onrender.com/backend/user/all"
  offPlan=0
  ready=0
  free=0
  appar=0
  vila=0
  market=0
  offPlanSelect=""
  monthsSelect=''
  realSelect=''
  interstedSelect=""
  constructor(public ht:HttpClient,public serv:Service1Service){}
  selecOffPlanEvent(e : any ) {
    this.offPlanSelect= e.target.value
    
  }
  selecdateSaleEvent(e:any){
    this.monthsSelect= e.target.value
  }
  selecInretstedEvent(e:any){
    this.interstedSelect= e.target.value

  }
  selectRealEvent(e:any){
    this.realSelect= e.target.value

  }
  ngOnInit(): void {
    this.ht.get(this.baseurl2).subscribe(res=>{
          console.log(res,"sad")
           var ob:any
           ob=res
           this.tab=ob
           console.log(this.tab ,'rryyy')
           this.redyNumber=this.tab.filter(ele=>ele.color=="4").length
         this.NumberIntested=this.tab.filter(ele=>ele.color=="1").length
         this.NumberNotIntested=this.tab.filter(ele=>ele.color=="0").length
         this.now=this.tab.filter(ele=>ele.dateSale=="now").length
         this.thrixMonths=this.tab.filter(ele=>ele.dateSale=="3 months").length
         this.sexMonths=this.tab.filter(ele=>ele.dateSale=="6 months").length
         this.market=this.tab.filter(ele=>ele.realEstateType=="market").length
         this.appar=this.tab.filter(ele=>ele.realEstateType=="apartement").length
         this.vila=this.tab.filter(ele=>ele.realEstateType=="villa").length
         this.offPlan=this.tab.filter(ele=>ele.isOffplan=="offplan").length
         this.ready=this.tab.filter(ele=>ele.isOffplan=="ready to").length
         this.free=this.tab.filter(ele=>ele.isOffplan=="free").length
          }) 

  }
  exportToExcel() {
    const data = this.tab
    const columns = this.getColumns(data);
    const worksheet = XLSX.utils.json_to_sheet(data, { header: columns });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  }

  getColumns(data: any[]): string[] {
    const columns = [];
    data.forEach(row => {
      Object.keys(row).forEach(col => {
        if (!columns.includes(col)) {
          columns.push(col);
        }
      });
    });
    return columns;
  }
  search(){
    console.log(this.monthsSelect,this.offPlanSelect,this.realSelect)
  ////
 if(this.offPlanSelect !==""){
  this.tab =this.tab.filter(ele=>ele.isOffplan==this.offPlanSelect)
 }
 if(this.monthsSelect !==""){
  this.tab=this.tab.filter(ele=>ele.dateSale==this.monthsSelect)
 }
 if(this.realSelect !==""){
  this.tab=this.tab.filter(ele=>ele.realEstateType==this.realSelect)
 }
 if(this.interstedSelect !==""){
  this.tab=this.tab.filter(ele=>ele.color==this.interstedSelect)
 }
  }
}
///

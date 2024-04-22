import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service1Service } from 'app/services/service1.service';
import * as XLSX from 'xlsx';
import { resolve4 } from 'dns/promises';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    afNewLead=true
    baseurl1="https://back23-vk2y.onrender.com/pub/"
    baseurl2="https://back23-vk2y.onrender.com/pub/nonNouveaux"
    tab:any[]=[]
    tabEmp:any[]=[]
    idEmp
    constructor(public ht:HttpClient,public serv:Service1Service){}
    selectEvent(e:any){
      // this.idEmp=this.tabEmp[e.target.value].login
      this.idEmp=e.target.value
             console.log(e,this.idEmp ,'id')
    }
    affNotNew(){

        this.ht.get(this.baseurl2).subscribe(res=>{
            var ob:any
            ob=res
            this.tab=ob 
            this.tab=this.tab.reverse()
            this.afNewLead=false
        })
    }
    affNew(){
        this.ht.get(this.baseurl1).subscribe(res=>{
            var ob:any
            ob=res
            this.tab=ob
            this.afNewLead=true
            this.tab=this.tab.reverse()
        })
    }
    info(e:any){
        console.log(this.tab[e].project,'rr')
     alert(this.tab[e].project)
    }
    addLeads(e:any){
        var lead=this.tab[e]
        lead.employer=this.idEmp
        lead.isNouveaux=false
        console.log(lead,'lead')
        this.serv.updateLead(lead._id,lead).subscribe(res=>{
           var ob:any 
           ob=res
           if(ob.message==true){
                     alert("sucess add lead")
           
            console.log(this.tabEmp ,"ee")
            console.log(this.baseurl1+"send-mail1/"+this.tabEmp.find(emp=>emp.login==this.idEmp).email,"rr")
              var url=this.baseurl1+"send-mail1/"+this.tabEmp.find(emp=>emp.login==this.idEmp).email
              this.ht.post(url,lead).subscribe(res=>{
                console.log(this.baseurl1+"send-mail1/"+this.tabEmp.find(emp=>emp.login==this.idEmp).email,'rto')
               console.log(res)
            })
            
           }

        })

    }
    ngOnInit(){
        this.ht.get(this.baseurl1).subscribe(res=>{
            var ob:any
            ob=res
            this.tab=ob
            this.tab=this.tab.reverse()
        })
        this.ht.get("https://heart-of-carthage-dubai.com/backend/employer/").subscribe(res=>{
            var ob:any
            ob=res
            this.tabEmp=ob
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
}

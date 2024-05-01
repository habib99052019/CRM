import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Service1Service } from 'app/services/service1.service';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  NombreLeadsFacebook=0
   NombreLeadswebSite=0
   NombreAllLeads=0
   redyNmuber=0
   redyNumberToday=0
   NumberIntestedToday=0
   NumberNotIntestedToday=0
   tableMetingToday:any[]=[]

   tableRedyLead:any[]=[]
   public tabActivitToday:any[]=[]
   tableLeadToday:any[]=[]
  baseurl1="https://back23-vk2y.onrender.com/pub/"
  
  baseurl2="https://backendiheb2.onrender.com/backend/user/all"
  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  tabMeetingValidée:any[]=[]
  tabMeetingValidéeToday:any[]=[]
  MessageToday=0
  redyNumber=0
  tabAll:any[]=[]
  NumberIntested=0
  NumberNotIntested=0
  NumberNotNewToday=0
  NumberNew=0
  tabAllNew:any[]=[]
  allNewToday=0
  NumberNewToday=0
  AllLeadsProssed=0
  public convertDateToDDMMYY() {
    var currentDate = new Date();
    // Créer un objet Date à partir de la chaîne de date fournie
    var day = currentDate.getUTCDate();
    var month = currentDate.getUTCMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    var year = currentDate.getUTCFullYear() ; // Obtenir les deux derniers chiffres de l'année

    // Ajouter un zéro devant le jour et le mois si nécessaire
    if (day < 10) {
       var  d = '0' + day;
    }
    if (month < 10) {
      var   m = '0' + month;
    }
if (day >= 10) {
       var  d = '' + day;
    }
    if (month >= 10) {
      var   m = '' + month;
    }

    // Retourner la date au format "dd-mm-yy"
    return  d + '-' + m + '-' + year;
}
public convertDate(date:any) {
  var currentDate = new Date(date);
  // Créer un objet Date à partir de la chaîne de date fournie
  var day = currentDate.getUTCDate();
  var month = currentDate.getUTCMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
  var year = currentDate.getUTCFullYear() ; // Obtenir les deux derniers chiffres de l'année

  // Ajouter un zéro devant le jour et le mois si nécessaire
  if (day < 10) {
     var  d = '0' + day;
  }
  if (month < 10) {
    var   m = '0' + month;
  }
if (day >= 10) {
     var  d = '' + day;
  }
  if (month >= 10) {
    var   m = '' + month;
  }

  // Retourner la date au format "dd-mm-yy"
  return  d + '-' + m + '-' + year;
}
  checkLeadFaceboook = ()=>{

    // ektib lcode mte3ik lina
                    
    this.ht.get(this.baseurl1+"/lengthFacebook/").subscribe(res=>{
      // console.log(res,"sad")
       var ob:any
       ob=res
       this.NombreLeadsFacebook=ob.length  
    })
    

    //hedhi matna7ihech
    setTimeout(() => {
       this.checkLeadFaceboook()
    }, 20000);
  }
  checkLeadNewToday = ()=>{

    // ektib lcode mte3ik lina
                    
    this.ht.get(this.baseurl1).subscribe(res=>{
      // console.log(res,"sad")
       var ob:any
       ob=res
       this.tabAllNew = ob
     this.allNewToday=  this.tabAllNew.filter(ele=>this.convertDate(ele.dateLead)==this.convertDateToDDMMYY()).length
          console.log()
    })
    

    //hedhi matna7ihech
    setTimeout(() => {
       this.checkLeadNewToday()
    }, 20000);
  }   
  checkAllUsers = ()=>{

    // ektib lcode mte3ik lina
                    
    this.ht.get(this.baseurl2).subscribe(res=>{
      // console.log(res,"sad")
       var ob:any
       ob=res
      var tab=[]
      tab=ob
     // this.AllLeadsProssed= tab.filter(ele=>ele.color !=="3").length
       this.NombreAllLeads=ob.length  
    })
    

    //hedhi matna7ihech
    setTimeout(() => {
       this.checkLeadFaceboook()
    }, 15000);
  }  
  checkLeadWebsite = ()=>{

    // ektib lcode mte3ik lina
                    
    this.ht.get(this.baseurl1+"/lengthWebSite/").subscribe(res=>{
      // console.log(res,"sad")
       var ob:any
       ob=res
       this.NombreLeadswebSite=ob.length  
    })
    

    //hedhi matna7ihech
    setTimeout(() => {
       this.checkLeadWebsite()
    }, 30000);
  }  
  constructor(public ht:HttpClient ,public serv1:Service1Service ){}
    ngOnInit(){
      this.checkRedy()
      this.checkLeadToday()
      this.checkMettingToday()
      this.checkMesssageToday()
      this.checkLeadNewToday()
      this.checkAllLeadFunc()
        this.ht.get("https://backendiheb2.onrender.com/backend/meet/all/validée").subscribe(res=>{
          // console.log(res,"sad")
           var ob:any
           ob=res
           this.tabMeetingValidée=ob
           this.tabMeetingValidéeToday=ob.filter(ele=>ele.DateMeet==this.convertDateToDDMMYY)
          })               
    this.ht.get(this.baseurl2).subscribe(res=>{
      // console.log(res,"sad")
       var ob:any
       ob=res
       this.tabAll=ob
       this.tabActivitToday=ob.filter(ele=>ele.dateUpdate==this.convertDateToDDMMYY)

       this.NombreAllLeads=ob.length 
       this.redyNumber=this.tabAll.filter(ele=>ele.color=="4").length
       this.NumberIntested=this.tabAll.filter(ele=>ele.color=="1").length
       this.NumberNotIntested=this.tabAll.filter(ele=>ele.color=="0").length 
       this.NumberNew=this.tabAll.filter(ele=>ele.color=="3").length
       this.AllLeadsProssed=this.tabAll.filter(ele=>ele.color !="3").length
    })
    
      this.ht.get(this.baseurl1+"/lengthFacebook/").subscribe(res=>{
        // console.log(res,"sad")
         var ob:any
         ob=res
         this.NombreLeadsFacebook=ob.length  
      })
      this.ht.get(this.baseurl1+"/lengthWebSite/").subscribe(res=>{
        // console.log(res,"sad")
         var ob:any
         ob=res
         this.NombreLeadswebSite=ob.length  
      }) 
      // console.log("habib")
      this.checkLeadFaceboook()
      this. checkLeadWebsite() 
      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");

      this.chartHours = new Chart(this.ctx, {
        type: 'line',

        data: {
          labels: ["day1", "day 2", "day 3", "day 4", "day 6", "Today"],
          datasets: [{
              borderColor: "#6bd098",
              backgroundColor: "#6bd098",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [300, 310, 316, 322, 330, 326]
            },
            {
              borderColor: "#f17e5d",
              backgroundColor: "#f17e5d",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [320, 340, 365, 360, 370, 385]
            },
            {
              borderColor: "#fcc468",
              backgroundColor: "#fcc468",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [370, 394, 415, 409, 425, 445]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });

      this.chartFunction()
      this.canvas = document.getElementById("chartEmail");
      this.ctx = this.canvas.getContext("2d");
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [1, 2, 3],
          datasets: [{
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#fcc468',
              '#ef8157'
            ],
            borderWidth: 0,
            data: [ this.NumberNewToday, this.NumberIntestedToday,  this.redyNumberToday,this.NumberNotIntestedToday]
          }]
        },

        options: {

          legend: {
            display: false
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });

      var speedCanvas = document.getElementById("speedChart");

      var dataFirst = {
        data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        fill: false,
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      var dataSecond = {
        data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        fill: false,
        borderColor: '#51CACF',
        backgroundColor: 'transparent',
        pointBorderColor: '#51CACF',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      };

      var speedData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [dataFirst, dataSecond]
      };

      var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: false,
        data: speedData,
        options: chartOptions
      });
    }
    checkRedy = ()=>{

      // ektib lcode mte3ik lina
                      
      this.ht.get(this.baseurl2+"/redy/").subscribe(res=>{
        console.log(res,"sad")
         var ob:any
         ob=res
         this.tableRedyLead=ob  
      })
     
  
      //hedhi matna7ihech
      setTimeout(() => {
         this.checkRedy()
      }, 3000);
    }  
  checkAllLeadFunc = ()=>{

      // ektib lcode mte3ik lina
                      
   this.ht.get(this.baseurl2).subscribe(res=>{
      // console.log(res,"sad")
       var ob:any
       ob=res
       this.tabAll=ob
       this.tabActivitToday=ob.filter(ele=>ele.dateUpdate==this.convertDateToDDMMYY)

       this.NombreAllLeads=ob.length 
       this.redyNumber=this.tabAll.filter(ele=>ele.color=="4").length
       this.NumberIntested=this.tabAll.filter(ele=>ele.color=="1").length
       this.NumberNotIntested=this.tabAll.filter(ele=>ele.color=="0").length 
       this.NumberNew=this.tabAll.filter(ele=>ele.color=="3").length
      this.AllLeadsProssed=this.tabAll.filter(ele=>ele.color !="3").length
    })
  
      //hedhi matna7ihech
      setTimeout(() => {
         this.checkAllLeadFunc()
      }, 5000);
    } 
    checkMettingToday= ()=>{

      // ektib lcode mte3ik lina
                      
      this.ht.get("https://backendiheb2.onrender.com/backend/meet/all/today/valide").subscribe(res=>{
        // console.log(res,"sad")
         var ob:any
         ob=res
         this.tableMetingToday=ob 
         
      })
     
  
      //hedhi matna7ihech
      setTimeout(() => {
         this.checkMettingToday()
      }, 3000);
    } 
     checkMesssageToday= ()=>{

      // ektib lcode mte3ik lina
                      
      this.ht.get("https://backendiheb2.onrender.com/backend/user/all/today/messages").subscribe(res=>{
        // console.log(res,"sad")
         var ob:any
         ob=res
         this.MessageToday=ob.message
         
      })
     
  
      //hedhi matna7ihech
      setTimeout(() => {
         this.checkMesssageToday()
      }, 3000);
    }   
    checkLeadToday= ()=>{

      // ektib lcode mte3ik lina
                      
      this.ht.get(this.baseurl2+"/today/").subscribe(res=>{
        // console.log(res,"sad")
         var ob:any
         ob=res
         this.tableLeadToday=ob 
         this.redyNumberToday=this.tableLeadToday.filter(ele=>ele.color=="4").length
         this.NumberIntestedToday=this.tableLeadToday.filter(ele=>ele.color=="1").length
         this.NumberNotIntestedToday=this.tableLeadToday.filter(ele=>ele.color=="0").length
         this.NumberNewToday=this.tableLeadToday.filter(ele=>ele.color=="3").length
         this.NumberNotNewToday=this.tableLeadToday.filter(ele=>ele.color !="3" && this.convertDate(ele.DateN) ==this.convertDateToDDMMYY() ).length
      })
     
  
      //hedhi matna7ihech
      setTimeout(() => {
         this.checkLeadToday()
      }, 5000);
    }  
  
    chartFunction= ()=>{

      // ektib lcode mte3ik lina
                      
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [1, 2, 3],
          datasets: [{
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#fcc468',
              '#ef8157'
            ],
            borderWidth: 0,
            data: [this.NumberNewToday, this.NumberIntestedToday,  this.redyNumberToday this.NumberNotIntestedToday,]        
          
            }]
        },

        options: {

          legend: {
            display: false
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });
     
  
      //hedhi matna7ihech
      setTimeout(() => {
         this.chartFunction()
      }, 10000);
    }
}

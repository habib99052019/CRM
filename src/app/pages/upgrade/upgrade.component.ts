import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'upgrade-cmp',
    moduleId: module.id,
    templateUrl: 'upgrade.component.html'
})

export class UpgradeComponent implements OnInit{
 im=""
  tabUpgrate:any[]=[
    {name:"DNS:heartof carthage",
    date:"",
    link:"",
    pyement:"",
    nombreJoursRestant:0

  },
  {name:"SSL",
  date:"",
  link:"",
  pyement:"",
  nombreJoursRestant:0
},
{name:"vps",
date:"",
link:"",
pyement:"",
nombreJoursRestant:0
},
{name:"Zapier",
date:"",
link:"",
pyement:"",
nombreJoursRestant:0
},
{name:"sttap.io",
date:"",
link:"",
pyement:"",
nombreJoursRestant:0

}
  ]
  imgaeSelected:any
  dataImage:any
//   checkDate = ()=>{

//     for (let i = 0; i < this.tabUpgrate.length ; i++) {
//     var  date1 = new Date('2012-08-20 00:00:00').getTime();
//     var  date2 = new Date('2012-10-29 22:16:57').getTime();
   
//  var  tmp = (date2 - date1)/(60000*60*24)
//       console.log(tmp ,tmp % 24)
//    ;
//     }
//     setTimeout(() => {
//        this.checkDate()
//     }, 30000);
//   }  
    selectF:any
    imageName:any
    constructor(public ht:HttpClient){}
    baseurl1=""
    registreImage(file:any){
      
        var fd=new FormData
      
        fd.append('image',file,file.name)
        this.ht.post(this.baseurl1+'/upload/',fd).subscribe(res=>{
          var image :any
         image=res.valueOf()
          console.log(image)
         this.imageName=this.baseurl1+"/uploads/"+ image.name
    })
        
      }
      selectFile(e:any){
        const fileInput = e.target
          
      const file = fileInput.files[0]

      const fileReader = new FileReader()
  
      fileReader.onload = (e:any)=>{
        this.imgaeSelected = e.target.result
        this.dataImage= "img/"+this.imgaeSelected
      }
      console.log(this.imgaeSelected  , "er")
      fileReader.readAsDataURL(file)
      console.log(
        fileReader.readAsDataURL(file),'reader')
      }
    ngOnInit(){
     
      // this.checkDate()
    }
}

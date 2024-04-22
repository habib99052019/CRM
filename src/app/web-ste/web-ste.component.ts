import { Component, OnInit, DoCheck ,ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  moduleId: module.id,
  selector: 'app-web-ste',
  templateUrl: './web-ste.component.html',
  styleUrls: ['./web-ste.component.scss'], 
 
})
export class WebSteComponent implements OnInit, DoCheck  {
  p="12"
  id:any
   affAjout=false
   affButonAdd=true
   affButtonEdit=false
   objectOp:any
   affAjoutL(){
    console.log(this.affAjout)
    this.affAjout=true
    console.log(this.affAjout)
    this.affButonAdd=true
    this.affButtonEdit=false
  }
  ngDoCheck() {
    console.log('La valeur est', this.option3);
  }
  deletP(e:any){
    console.log(e)
  }
 addVal(){
  this.p="15" }
  // Utilisez cela après des modifications asynchrones
someAsyncOperation() {
  // ... opérations asynchrones ...
  this.cdr.detectChanges();
}
  tabLanding:any[]=[]
  baseurl1="https://back23-vk2y.onrender.com/laniding"
  landing:any

  name=""
  title1=""
  numberTitle1=""
  title2=""
  numbertitle2=""
  endTitle2=""
  title1Section2=""
  title2Section2=""
  imgSelected:any
  imgSelected2:any
  option1=[]
  option3:any[]=[]
  video1=""
  img1=""

  image2=""
  dataImage:any
  addPostion(){
    // this.option3=[{
    //   name:"aaa",
    //   valueP:"aaa"
    // }]
    this.p="15"
//     console.log(this.option1)
// this.option1.push(this.objectOp)
// this.option3=this.option1
// console.log(this.option3)
  }
  selectFile(e:any){
    const fileInput = e.target
      
  const file = fileInput.files[0]

  const fileReader = new FileReader()

  fileReader.onload = (e:any)=>{
    this.imgSelected = e.target.result
    this.dataImage= "img/"+this.imgSelected
    this.img1=this.imgSelected
  }

  console.log(this.imgSelected  , "er")
  fileReader.readAsDataURL(file)
  console.log(
    fileReader.readAsDataURL(file),'reader')
  }
  selectFile2(e:any){
    const fileInput = e.target
      
  const file = fileInput.files[0]

  const fileReader = new FileReader()

  fileReader.onload = (e:any)=>{
    this.imgSelected2 = e.target.result
    this.dataImage= "img/"+this.imgSelected2
    this.image2=this.imgSelected2
  }
  console.log(this.imgSelected2  , "er")
  fileReader.readAsDataURL(file)
  console.log(
    fileReader.readAsDataURL(file),'reader')
  }
  constructor(private http: HttpClient,private cdr: ChangeDetectorRef) { }
 
  ngOnInit(): void {
    this.objectOp={
      pos1:"",
      value1:"",
      pos2:"",
      value2:"",
      pos3:"",
      value3:""
    }
    this.http.get(this.baseurl1).subscribe(res=>{
      console.log(res,"sad")
       var ob:any
       ob=res
       this.tabLanding=ob.length  
    })
  }
  delet(e:any){
    this.http.delete(this.baseurl1).subscribe(res=>{
      alert("secssfull")
    })
  }
  edit(e:any){
    this.id=e   
    this.affButonAdd=false
    this.affButtonEdit=true
    this.http.get(this.baseurl1+e).subscribe(res=>{
      console.log(res,"sad")
       var ob:any
       ob=res
      this.name=ob.name
      this.title1=ob.title1
      this.numberTitle1=ob.numberTitle1
      this.title2=ob.title2
      this.numbertitle2=ob.numbertitle2
      this.endTitle2=ob.endTitle2
      this.title1Section2=ob.title1Section2
      this.option1=ob.option1
      this.img1=ob.img1
      this.video1=ob.video1
      this.image2=ob.image2
      this.objectOp=ob.objectOp
    })
  }
  addLanding(){
    this.http.post(this.baseurl1,{
      name:this.name,
      title1:this.title1,
      numberTitle1:this.numberTitle1,
      title2:this.title2,
      numbertitle2:this.numbertitle2,
      endTitle2:this.endTitle2,
      title1Section2:this.title1Section2,
      option1:this.option1,
      img1:this.img1,
      video1:this.video1,
      image2:this.image2,
      objectOp:this.objectOp 
    }).subscribe(res=>{
      alert("secssful")
    })
  }
  editLanding(){
    this.http.put(this.baseurl1+this.id,{
      name:this.name,
      title1:this.title1,
      numberTitle1:this.numberTitle1,
      title2:this.title2,
      numbertitle2:this.numbertitle2,
      endTitle2:this.endTitle2,
      title1Section2:this.title1Section2,
      option1:this.option1,
      img1:this.img1,
      video1:this.video1,
      image2:this.image2

    }).subscribe(res=>{
      alert("secssful")
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
 public  employer:any
public  affDashbord=true
public affGrh =false
 affAdmin:boolean
 affSales:boolean

  constructor(public http:HttpClient) { }
  login(url:string,data:any){
   return this.http.post(url,data)
  

  }
 getEmpById(id:string){
  return this.http.get("https://heart-of-carthage-dubai.com/backend/employer/"+id)
 }
 updateLead(id:string,data:any){
  return this.http.put("https://back23-vk2y.onrender.com/pub/"+id,data)
 }
 posteGetLeadsSales(url:string , ob:any){
  return this.http.post(url,ob)
 }
}

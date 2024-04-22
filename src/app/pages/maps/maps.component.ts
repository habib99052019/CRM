
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service1Service } from 'app/services/service1.service';
import { resolve4 } from 'dns/promises';
import * as XLSX from 'xlsx';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
    
  tab:any[]=[]
  baseurl2="https://backendiheb2.onrender.com/backend/user/all"
  fun1(e){
    var date = new Date(this.tab[e].dateNumber) +""
    return date.slice(0,21)
  }
  fun2(e){

     var tabHist=this.tab[e].historique.reverse()
     console.log(tabHist,"nn")
    return tabHist[0].comment
  }
  public AffLastUpdate(e:any){
if(this.tab[e].historique.length>0){
    return true
}
else{
    return false
}

  }
  constructor(public ht:HttpClient,public serv:Service1Service){}
    ngOnInit() {
        this.ht.get(this.baseurl2+"/today/").subscribe(res=>{
            console.log(res,"sad")
             var ob:any
             ob=res
            this.tab=ob})
    //     var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    //     var mapOptions = {
    //       zoom: 13,
    //       center: myLatlng,
    //       scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    //       styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

    //     }
    //     var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //     var marker = new google.maps.Marker({
    //         position: myLatlng,
    //         title:"Hello World!"
    //     });

    //     // To add the marker to the map, call setMap();
    //     marker.setMap(map);
    }
}

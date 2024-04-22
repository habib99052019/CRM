import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-web-site',
  templateUrl: 'side-bar-web-site.component.html',
  styleUrls: ['./side-bar-web-site.component.scss']
})
export class SideBarWebSiteComponent implements OnInit {
  affLan=true
  affWeb=false
  affLanding(){
    this.affLan=true
    this.affWeb=false
  }
  affWebSite(){
    this.affLan=false
    this.affWeb=true
  }
  constructor() { }

  ngOnInit(): void {
  }

}

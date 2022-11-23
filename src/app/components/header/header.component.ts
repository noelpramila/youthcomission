import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navtoaboutus(){
    (document as any).getElementById("AboutUs").scrollIntoView();
  }

  navtoteams(){
    (document as any).getElementById("Teams").scrollIntoView();
  }

  navtocontactus(){
    (document as any).getElementById("Contactus").scrollIntoView();
  }

}

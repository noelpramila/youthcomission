import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navtoaboutus(){
    (document as any).getElementById("AboutUs").scrollIntoView();
  }

  navtoteams(){
    (document as any).getElementById("Teams").scrollIntoView();
  }

  navtohome(){
    (document as any).getElementById("Home").scrollIntoView();
  }
}

import { Component } from '@angular/core';
import { State } from '@ngxs/store';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  ngOnInit() {
    let location:string = window.location.href;
    if(location.includes("reactors")){
      var htmlElement;
      var inactiveElement;
      if(htmlElement = document.getElementById("headerIcon")){
        htmlElement.className = "header-icon__wrapper__reactorIcon";
        htmlElement.setAttribute("href","#welcome")
      }
    }else{
      if(inactiveElement = document.getElementById("wrapperLink")){
        inactiveElement.setAttribute("disabled", "disabled");
        inactiveElement.removeAttribute("href");
      }
    }
  }
  goHome(){
   // this.routes['/'];

  }
}

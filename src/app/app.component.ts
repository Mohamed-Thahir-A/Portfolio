import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import {  RouterLink, RouterLinkActive,RouterOutlet,Router ,NavigationEnd} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterLink, CommonModule,RouterLinkActive,NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title="Portfolio"
  isHomeactive=true
   headerClass='header'
  //     constructor(private router: Router) {   // ✅ inject router here
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       if (event.url.includes('')) {
  //         this.headerClass = 'about-header';
  //       }  else {
  //         this.headerClass = 'header';
  //       }
  //     }
  //   });
  // }
   house="house-regular-full.svg"
   constructor(private router:Router){
  this.router.events.subscribe(event=>{
    if (event instanceof NavigationEnd){
      this.isHomeactive=this.router.url!=='/home';
     
    }
 
   
  })
}

}
//   title = 'portfolio';

// domain=["Fullstack Developer","Frontend Developer","Backend Developer","UI/UX Designer"];
// charcount=0;
// charindex=0;
// typespeed=2000;
// typing="";
// typingtimeout:any;
// constructor(){
//   this.startTypingeffect();
// }
// startTypingeffect(): void{
//   this.type();
// }

// type():void{
//   const text=this.domain[this.charcount];
//   let isDelete=false
  
//   if(isDelete){
//     this.typing+= text.substring(0,this.charindex--)
//   }
//   else{
//     this.typing+=text.substring(0,this.charindex++)
//   }
//   this.typespeed=isDelete?50:100;
//   if (!isDelete&&this.charindex===text.length){
//     this.typespeed=2000;
//     isDelete=true;
//   }
//   else{
//     this.typespeed=500;
//     isDelete=false
//     this.charcount=(this.charcount+1)%this.domain.length;
//   }
//   this.typingtimeout=setTimeout(()=>this.type(),this.typespeed)
// }

// }

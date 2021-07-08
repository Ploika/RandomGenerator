import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  constructor() { }

  ngOnInit(): void {}
  startMakeRandom(): void {
    interval(3000)
    .pipe(
      tap(() => {
        let text = '';
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++){
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        if(text.toLocaleLowerCase() === text.toLocaleLowerCase().split('').reverse().join('')){
          let div = document.createElement("div");
          div.innerHTML = text;
          div.style.color = "red";
          this.container.nativeElement.appendChild(div)
          console.log('palindrom')
        } else if(!isNaN(+text)){
            let div = document.createElement("div");
            div.innerHTML = text;
            div.style.color = "blue";
            this.container.nativeElement.appendChild(div)
        } else{
          for(let one of text.split('')){
            if(+one === 0){
              return;
            }
          }
        }
        let div = document.createElement("div");
        div.innerHTML = text;
        this.container.nativeElement.appendChild(div)
      })
    )
    .subscribe()
  }
}

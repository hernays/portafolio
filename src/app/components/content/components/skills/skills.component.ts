import { Component, ViewChild, ElementRef, ChangeDetectorRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  @ViewChild('rotar') rotar!: ElementRef<HTMLElement>;
  @ViewChild('rotarOne') rotarOne!: ElementRef;
  nombre :string;
  controlScroll: number = 0;
  contadorTime: number = 0;
  finInterval:any;
  click: boolean = false;

  constructor(
    private render: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private cd : ChangeDetectorRef,
  ){

    this.render.listen('window','scroll', (e) => {
      this.controlScroll = Number(this.document.documentElement.scrollTop)
    
      if(this.controlScroll > 100){
        if(this.contadorTime === 0){
          this.time();
          this.contadorTime++;
        }
      }
    })
  }

  ngOnInit(){
    // const rotar = this.document.documentElement.querySelector('#rotar')
    // rotar.addEventListener('onmousemove', (e) => {
    //   console.log('clickckckc', e)
    // })
  
  }
  
  
  time(){
    this.finInterval = setInterval(() => {
      this.retornaScroll(true)
    }, 2000)
  }

  retornaScroll(click?:boolean, r?:boolean){
    if(!r) this.rotar.nativeElement.scrollLeft += 205;
    
    if(this.rotar.nativeElement.scrollLeft > 1400){
      if(click){
        setTimeout(() => {
          this.rotar.nativeElement.scrollLeft = 0;
        },2000)
      }else this.rotar.nativeElement.scrollLeft = 0;
    }
  }

  next(event:number){
    clearInterval(this.finInterval);
    this.click = true;
    if(this.rotar.nativeElement.scrollLeft < 1500) this.rotar.nativeElement.scrollLeft += 205;
  }

  previe(event:number){
    clearInterval(this.finInterval);
    console.log(event)
    
    console.log('aqui')
    this.click = true;
    
    if(this.rotar.nativeElement.scrollLeft > 0) this.rotar.nativeElement.scrollLeft = this.rotar.nativeElement.scrollLeft - 205;
    console.log(this.rotar.nativeElement.scrollLeft)
    console.log('ancho total',this.rotar.nativeElement.offsetWidth)
  }
}

import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  @ViewChild('rotar') rotar!: ElementRef;

  constructor(
    private changeDetectorRef : ChangeDetectorRef,
  ){}
  
  ngOnInit(){
    setTimeout(() => {
        this.time()
      }, 10000);
  }
  
  ngAfterViewInit(){

    }
  
  
  time(){
    console.log('entro2')
    this.rotar.nativeElement.style.background = 'red';
    console.log(this.rotar.nativeElement.scrollLeft)
    console.log(this.rotar.nativeElement.offsetWidth)
    const setWidth = this.rotar.nativeElement.offsetWidth;

    interval(5000).subscribe( x => {
      console.log('data', x)
    })
    

    // this.rotar.nativeElement.scrollLeft += 210;
  


   
  }

}

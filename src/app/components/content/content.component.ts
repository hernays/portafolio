import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [SkillsComponent, AboutComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Output() initIntervalo :EventEmitter<boolean> = new EventEmitter(false);

  constructor(
    private cd: ChangeDetectorRef
  ){

  }
  ngOnInit(){
  }

}

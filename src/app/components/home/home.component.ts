import { ContentComponent } from './../content/content.component';
import { Component } from '@angular/core';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent  {
  name = 'Imminence';

  condition:boolean = true;
  toggle(){ this.condition = !this.condition }

  state = true;
  toggleState(){ this.state=!this.state}
  imgUrl = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjioC8fL0h9b4_49Un_9aUNWvqLiJJqPREhbtZeacASRcTEYVWS7OJEDjKzDxTwQ5KSTMGQklZzfdwHq-1D1MFDx_4uwiZVnJed4coIMBZtvQUTTlMhMJ57vA027nrZL3glC__pYx2EaA8GDGo4NGO5QcjqpPNOMGIn1H35ncd7rM2FIwa4PjceRM-apg/s2048/1.jpeg';

  imgUrl2 ='https://cdn-00.rockfoto.nu/imagesbig/20200215_231913_722926.jpg';

  imgUrl3='https://www.darkside.ru/band/13999/n150357.jpg';
  imgUrl4="https://lastfm.freetls.fastly.net/i/u/770x0/c7856ff2902949025057c3040d4952fd.jpg#c7856ff2902949025057c3040d4952fd";
  
  items = ['Eddie Berg', 'Harald Barrett', 'Alex Arnoldsson', 'Peter Hanström', 'Christian Höijer'];
  paragrafs = ['Вокал, скрипка', 'Гитара, бэк-вокал', 'Ритм-гитара', 'Бас-гитара', 'Ударные'];
  today = new Date;
  price = 100;
  date = "OCTOBER 27, 2022"
  p = "Thank you for one year of Chasing Shadows.";
  span = "Our goal has always been to be self-sufficient and independent. That's why we are always in charge of every single creative process within the band. The idea behind 'Chasing Shadows: The short film' started out as an attempt to do something different and break the boundaries of how music is released today. The music video was the biggest and most challenging project we have ever engaged in. The production was written, developed and funded by ourselves. ";
  placeholder = "Email";
  showLink = false;
  toggleLinks() {
    this.showLink = !this.showLink;
  }

  constructor() {}

}

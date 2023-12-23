import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifsInterfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];

}

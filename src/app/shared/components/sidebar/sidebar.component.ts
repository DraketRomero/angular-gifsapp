import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) { }

  // public gifsSearchHistory: string[] = this.gifsService.tagsHistory; 

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  reSearchTag( tag: string ) {
    this.gifsService.searchTag( tag );
  }

}

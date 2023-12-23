import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

/* #txtTagInput - Se conoce como referencia local, nombra a un elemento HTML que puede ser referenciado desde el TS */
// @Component({
//   selector: 'gifs-search-box',
//   template: `
//     <h5>Buscar:</h5>
//     <input type="text"
//       class="form-control" 
//       placeholder="Buscar gifs...."
//       (keyup.enter)="searchTag(txtTagInput.value)"
//       #txtTagInput
//       >
//   `,
// })

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control" 
      placeholder="Buscar gifs...."
      (keyup.enter)="searchTag()"
      #txtTagInput
      >
  `,
})
export class SearchBoxComponent {

  /**
   * * ViewChild - Hace referencia al elemento HTML que contenga la palabra que va dentro del parentecis, o sea, la referencia local
   */
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) { }

  // searchTag( newTag: string) {
  //   console.log({ newTag })
  // }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}

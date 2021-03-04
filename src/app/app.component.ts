import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  title = 'book-shop';

  @ViewChild('mainTitle') mainTitle: ElementRef;

  ngAfterViewChecked() {
    this.mainTitle.nativeElement.textContent = this.title.toUpperCase();
  }
}

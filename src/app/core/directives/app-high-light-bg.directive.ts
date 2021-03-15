import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighLightBg]'
})
export class AppHighLightBgDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.highlight('#ff4081');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

}

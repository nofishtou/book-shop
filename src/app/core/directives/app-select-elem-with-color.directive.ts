import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppSelectElemWithColor]'
})
export class AppSelectElemWithColorDirective {
  @Input('appAppSelectElemWithColor') color:string;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click')
  public onCLick () {
    console.log(this.color, this.elementRef.nativeElement);
    if(!this.elementRef.nativeElement.classList.contains('selected-elem-with-color')) {
      this.renderer2.addClass(this.elementRef.nativeElement,'selected-elem-with-color')
      this.renderer2.setStyle(this.elementRef.nativeElement, "border-color", this.color)
      return;
    }
    this.renderer2.removeClass(this.elementRef.nativeElement,'selected-elem-with-color')
    this.renderer2.removeStyle(this.elementRef.nativeElement, "border-color")
  }
}

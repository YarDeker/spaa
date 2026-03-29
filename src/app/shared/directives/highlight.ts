import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightColor]',
})
export class Highlight {
  @Input() appHighlightColor = 'blue'

  @HostBinding('style.transform') transform = 'scale(1)';
  @HostBinding('style.transition') transition = 'all .15s ease-in-out';
  @HostBinding('style.boxShadow') boxShadow = 'none';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.transform = 'scale(1.02)';
    this.boxShadow = '0 0 15px green';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transform = 'scale(1)';
    this.boxShadow = 'none';
  }
}

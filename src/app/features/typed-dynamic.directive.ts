import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import Typed from 'typed.js';

@Directive({
  selector: '[appTypedDynamic]',
  standalone: true,
})
export class TypedDynamicDirective implements OnInit {
  constructor(private el: ElementRef) {}

  @Input() typedstring!: string[];
  @Input() options: any;
  private typed!: Typed;

  ngOnInit(): void {
    this.typed = new Typed(this.el.nativeElement, {
      strings: this.typedstring,
      ...this.options,
    });
  }
}

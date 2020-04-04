import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-biz-card',
  templateUrl: './biz-card.component.html',
  styleUrls: ['./biz-card.component.css'],
  animations: [
    trigger('xExpand', [
      state('close', style({
        marginLeft: '100px',
        marginRight: '100px',
        width: 0,
        opacity: 0
      })),
      state('open', style({
        marginLeft: '0px',
        marginRight: '0px',
        width: '337px',
        opacity: 1
      })),
      transition('open <=> close', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class BizCardComponent implements OnInit, AfterViewInit {
  isOpen: boolean = false

  constructor(public el: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit() { this.isOpen = true }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition <= componentPosition + 200) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    }
}

import { NgClass } from '@angular/common';
import { Component, HostListener, signal, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuStatus = signal(false)
  currentRoute = signal('')

  toggleMenu(){
    this.menuStatus.update((status) => !status)
  }

  closeMenu(){
    this.menuStatus.set(false)
  }

  constructor(private el: ElementRef, private router : Router){
    this.router.events.subscribe(() => {
      this.currentRoute.set(this.router.url)
    })
  }

  @HostListener('document:click', ['$event'])
    onClickOutside(event: Event){
      const clickedInside = this.el.nativeElement.contains(event.target)
      if(this.menuStatus() && !clickedInside){
        this.closeMenu()
      }
    }
}

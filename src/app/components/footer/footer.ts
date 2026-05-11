import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, signal} from '@angular/core';
type contactStatus = 'net' | 'phones' | 'closed' 

@Component({
  selector: 'app-footer',
  imports: [NgClass],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})

export class Footer {

  constructor(private el: ElementRef){}

  contactWithWhatsapp1(){
    window.open('https://wa.me/5354407111?text=Hola%20quiero%20más%20información', '_blank')
    this.footerLink.set('closed')
  }
  contactWithWhatsapp2(){
    window.open('https://wa.me/5356128293?text=Hola%20quiero%20solicitar%20un%20servicio', '_blank')
    this.footerLink.set('closed')
  }
  contactWithFacebook(){
    window.open('https://www.facebook.com/tu.usuario', '_blank')
    this.footerLink.set('closed')
  }
  contactWithCelular1(){
    window.location.href = 'tel:+5354407111'
    this.footerLink.set('closed')
  }
  contactWithCelular2(){
    window.location.href = 'tel:+5356128293'
    this.footerLink.set('closed')
  }
  contactWithTelephone(){
    window.location.href = 'tel:+48696672'
    this.footerLink.set('closed')
  }

    footerLink = signal<contactStatus>('closed')

  openNet(){
    if(this.footerLink() !== 'net'){
      this.footerLink.set('net')
    }
    else{
      this.footerLink.set('closed')
    }
  }

  openContact(){
    if(this.footerLink() !== 'phones'){
      this.footerLink.set('phones')
    }
    else{
      this.footerLink.set('closed')
    }
  }

  closeFooterLinks(){
    this.footerLink.set('closed')
  }

  @HostListener('document:click', ['$event'])
    onClickOutside(event: Event){
      const clickedInside = this.el.nativeElement.contains(event.target)
      if(this.footerLink() && !clickedInside){
        this.closeFooterLinks()
      }
    }

    
}


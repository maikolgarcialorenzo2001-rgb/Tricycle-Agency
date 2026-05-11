import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientDetailConector {
  selectedService = signal<string | null>(null)

  setSelected(name: string){
    this.selectedService.set(name)
  }

  getSelected(): (string | null){
    return this.selectedService()
  }
}

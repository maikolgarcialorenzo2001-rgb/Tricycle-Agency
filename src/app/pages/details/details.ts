import { Component, signal, computed, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientServicesService } from '../../services/client-services';
import { Header } from '../../components/header/header';
import { ClientServicesModel } from '../../models/client-services';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

  serviceId = signal<string | null>(null);
  openedService: ClientServicesModel | null = null

  serviceDetail = computed(() => {
    const id = this.serviceId();
    if (!id) return null;
    return this.services.services.find(s => s.id === id) ?? null;
  });

  constructor(
    private route: ActivatedRoute,
    private services: ClientServicesService
  ) {

    const id = this.route.snapshot.paramMap.get('name');
    this.serviceId.set(id);

    effect(() => {
      this.openedService = this.serviceDetail()
    });
  }
}
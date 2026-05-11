import { Component, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { ClientServicesService } from '../../services/client-services';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from "@angular/router";
import { ClientDetailConector } from '../../services/client-detail-conector';

@Component({
  selector: 'app-client-services',
  imports: [Header, Footer, RouterLink],
  templateUrl: './client-services.html',
  styleUrl: './client-services.css',
})
export class ClientServices {
  constructor(public services: ClientServicesService, public connectionServices: ClientDetailConector){}
}

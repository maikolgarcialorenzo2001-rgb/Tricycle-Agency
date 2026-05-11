import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-about-us',
  imports: [Header, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}

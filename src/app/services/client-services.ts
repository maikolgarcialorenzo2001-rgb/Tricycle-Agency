import { Injectable } from '@angular/core';
import { ClientServicesModel } from '../models/client-services';

@Injectable({
  providedIn: 'root',
})
export class ClientServicesService {
  services: ClientServicesModel[] = [
    {
      id: 'transporte-local',
      name: 'Transporte Local',
      minPrice: 500, 
      maxPrice: 2500,
      reservedPrice: 2000,
      description: 'Viajes con pasajeros dentro del casco urbano de viñales o zonas aledañas cercanas.',
      fullDescription: 'El transporte local en Viñales es una solución rápida, cómoda y confiable para moverte por todo el pueblo y sus alrededores. Nuestro servicio está diseñado para adaptarse tanto a residentes como a visitantes que desean desplazarse con facilidad hacia los principales puntos de interés, casas particulares, restaurantes, senderos naturales y actividades turísticas. Ofrecemos traslados eficientes dentro del casco urbano, así como viajes hacia zonas rurales como Los Mogotes, el Mirador, el Mural de la Prehistoria, la Cueva del Indio, Palenque de los Cimarrones y otros destinos emblemáticos del Valle de Viñales. Nuestro equipo conoce cada rincón del territorio, lo que garantiza rutas rápidas, seguras y optimizadas. Nos caracterizamos por la puntualidad, la atención personalizada y la flexibilidad para ajustarnos a tus necesidades. Ya sea que necesites un traslado corto, un recorrido turístico, transporte para hacer compras, visitas a fincas de tabaco o simplemente moverte de un punto a otro, estamos listos para ayudarte en cualquier momento.',
      imgRoute: 'assets/img/1.jpg',
      stimateTime: 'El tiempo estimado depende de la distancia, no más de 30 minutos.'
    },
    {
      id: 'transporte-pinar-del-rio',
      name: 'Transporte hasta Pinar del Río',
      minPrice: 1500, 
      maxPrice: 10000,
      reservedPrice: 10000,
      description: 'Viajes con pasajeros hasta pinar del río.',
      fullDescription: 'El servicio de transporte desde Viñales hasta Pinar del Río está diseñado para ofrecerte un viaje cómodo, seguro y puntual entre dos de las zonas más importantes de la provincia. Ya sea que necesites trasladarte por motivos personales, realizar gestiones, visitar familiares, asistir a citas médicas o simplemente moverte con rapidez, contamos con opciones flexibles y confiables para adaptarnos a tus necesidades. Realizamos traslados directos desde cualquier punto de Viñales hacia la ciudad de Pinar del Río, incluyendo hospitales, terminales, oficinas, centros comerciales y barrios residenciales. Nuestro equipo conoce perfectamente la ruta, lo que garantiza un viaje fluido, sin demoras innecesarias y con total seguridad. Nos destacamos por la puntualidad, la atención personalizada y la comunicación clara en cada etapa del servicio. Puedes solicitar tu traslado con antelación o de manera inmediata, y siempre recibirás una respuesta rápida y profesional. Además, ofrecemos precios transparentes y un trato amable que convierte cada viaje en una experiencia confiable y sin complicaciones.',
      imgRoute: 'assets/img/2.jpg',
      stimateTime: 'El tiempo estimado es entre 1 hora ~ 1 hora y 30 minutos aproximadamente.'
    },
    {
      id: 'transporte-zonas-exteriores',
      name: 'Transporte a zonas lejanas',
      minPrice: 1000, 
      maxPrice: 8000,
      reservedPrice: 6500,
      description: 'Viajes con pasajeros a zonas aledañas lejanas (Los Jazmines, Moncada, Chile, Palenque etc).',
      fullDescription: 'El servicio de transporte hacia zonas aledañas a Viñales está diseñado para ofrecerte movilidad cómoda, segura y eficiente hacia los destinos más importantes que rodean el Valle. Ya sea que desees visitar áreas rurales, fincas de tabaco, miradores naturales, comunidades cercanas o puntos estratégicos fuera del casco urbano, contamos con opciones flexibles que se adaptan a tus necesidades. Realizamos traslados hacia lugares como El Moncada, San Vicente, La Hermita, El Palmarito, El Paraíso, Los Acuáticos, Minas de Matahambre, Puerto Esperanza y otras localidades cercanas. Nuestro equipo conoce perfectamente cada ruta, lo que garantiza viajes fluidos, sin contratiempos y con total seguridad, incluso en caminos rurales o de difícil acceso. Nos destacamos por la puntualidad, la atención personalizada y la comunicación clara en cada etapa del servicio. Puedes solicitar tu traslado con antelación o de manera inmediata, y siempre recibirás una respuesta rápida y profesional. Además, ofrecemos precios transparentes y un trato amable que convierte cada viaje en una experiencia confiable y agradable. Si buscas un transporte eficiente para explorar zonas cercanas a Viñales, realizar visitas familiares, hacer gestiones o disfrutar de actividades turísticas fuera del pueblo, somos la opción ideal para ti.' ,
      imgRoute: 'assets/img/3.jpg',
      stimateTime: 'El tiempo estiamdo ronda entre los 30 minutos y 1 hora aproximadamente.'
    },
    {
      id: 'servicio-de-carga',
      name: 'Transporte de mercancías',
      minPrice: 1500, 
      maxPrice: 10000,
      externalPrice: 3000,
      intermunicipalPrice: 10000,
      description: 'Incluye carga de mercancías, productos, equipos electrodomésticos de manera local en el pueblo.',
      fullDescription: 'Nuestro servicio de carga está diseñado para ofrecerte una solución rápida, segura y confiable para el traslado de paquetes, mercancías y artículos de cualquier tipo dentro de Viñales y hacia destinos cercanos. Trabajamos con total responsabilidad para garantizar que cada entrega llegue en tiempo, en buenas condiciones y con la atención que cada cliente merece. Realizamos transporte de carga ligera y mediana, incluyendo compras, equipajes, cajas, insumos, materiales, productos agrícolas y artículos personales. Ya sea que necesites enviar algo urgente, mover mercancía para tu negocio o trasladar pertenencias de un punto a otro, contamos con la experiencia y los medios necesarios para hacerlo de forma eficiente. Nos caracterizamos por la puntualidad, la comunicación clara y el trato profesional. Cada solicitud se maneja con cuidado, asegurando que tu carga sea transportada de manera segura y sin contratiempos. Además, ofrecemos precios transparentes y opciones flexibles para adaptarnos a tus necesidades, ya sea un traslado inmediato o programado. Si buscas un servicio de carga confiable, responsable y disponible cuando lo necesites, somos la opción ideal para garantizar que tus envíos lleguen a su destino sin preocupaciones.',
      imgRoute: 'assets/img/4.jpg',
      stimateTime: 'El servicio de carga tiene un tiempo estimado variable según el peso de la carga.'
    },
  ]
}

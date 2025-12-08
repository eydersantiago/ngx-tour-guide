import { Component, AfterViewInit } from '@angular/core';
import {
  NgxTourGuideComponent,
  NgxTourGuideService,
} from '@shipbit/ngx-tour-guide';
import { ShowcaseContainerComponent } from './showcase-container/showcase-container.component';
import { CustomizeActionsComponent } from './showcases/customize-actions/customize-actions.component';
import { CustomizeStopsComponent } from './showcases/customize-stops/customize-stops.component';
import { HtmlContentComponent } from './showcases/html-content/html-content.component';
import { RegisterComponent } from './showcases/register/register.component';
import { SetupComponent } from './showcases/setup/setup.component';
import { CommonModule } from '@angular/common';
import { PortadaComponent } from './showcases/portada/portada.component';
import { IntroduccionComponent } from './showcases/introduccion/introduccion.component';
import { RequisitosComponent } from './showcases/requisitos/requisitos.component';
import { InstalacionComponent } from './showcases/instalacion/instalacion.component';
import { SolucionComponent } from './showcases/solucion/solucion.component';
import { MantenimientoComponent } from './showcases/mantenimiento/mantenimiento.component';
import { SoporteComponent } from './showcases/soporte/soporte.component';
import { GlosarioComponent } from './showcases/glosario/glosario.component';
import { ApendiceComponent } from './showcases/apendice/apendice.component';
import { DescripcionComponent } from './showcases/descripcion/descripcion.component';

@Component({
  imports: [
    CommonModule,
    NgxTourGuideComponent,
    SetupComponent,
    RegisterComponent,
    HtmlContentComponent,
    CustomizeActionsComponent,
    CustomizeStopsComponent,
    ShowcaseContainerComponent,
    PortadaComponent,
    IntroduccionComponent,
    RequisitosComponent,
    InstalacionComponent,
    SolucionComponent,
    MantenimientoComponent,
    SoporteComponent,
    GlosarioComponent,
    ApendiceComponent,
    DescripcionComponent,
  ],
  selector: 'showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent implements AfterViewInit{
  // 🔹 Título del manual
  title = 'Manual de usuario NU Bank';

  // 🔹 Sidebar del manual
  sections = [
    { id: 'portada', label: 'Portada' },
    { id: 'indice', label: 'Índice' },
    { id: 'introduccion', label: 'Introducción' },
    { id: 'requisitos', label: 'Requisitos del sistema' },
    { id: 'instalacion', label: 'Instalación / acceso' },
    { id: 'interfaz', label: 'Descripción de la interfaz' },
    { id: 'funciones', label: 'Funciones y características' },
    { id: 'faq', label: 'Solución de problemas / FAQ' },
    { id: 'mantenimiento', label: 'Mantenimiento y actualizaciones' },
    { id: 'soporte', label: 'Soporte técnico' },
    { id: 'glosario', label: 'Glosario' },
    { id: 'apendices', label: 'Apéndices' },
  ];

  // 🔹 Sección inicial: Portada
  currentSection = 'portada';

  // 🔹 Fecha para mostrar en portada
  today = new Date();

  // 🔹 Estado del sidebar
  sidebarOpen = true;

  constructor(public tourGuideService: NgxTourGuideService) {
    // 🔹 TOUR 1: Funciones / Flujo de inicio de sesión + depositar (EL ORIGINAL)
    tourGuideService.register(
      {
        stops: [
          {
            title: 'Bienvenido a la guía de usuario NU Bank',
            content:
              'Aquí te guiaremos a través de las principales funciones de la aplicación NU Bank.',
          },
          {
            element: '.restart',
            title: 'Punto de reinicio',
            content: 'Aquí puedes reiniciar el tour en cualquier momento.',
          },
          {
            element: '#setupImport',
            title: 'Pantalla de inicio de sesión',
            useHtml: true,
            content: `Este es el inicio de nuestro recorrido, la aplicación Nu Bank permite a los usuarios ingresar de dos maneras, <br> "Entrar en mi cuenta", "Con tu cédula y código de acceso"<br>`,
          },
          {
            element: '#setupOverlay',
            title: 'Inicio de Sesión',
            useHtml: true,
            content:
              'En esta oportunidad, seleccionamos "Entrar en mi cuenta" para acceder a la aplicación, <br> ingresando posteriormente nuestro correo electrónico y contraseña.',
          },
          {
            element: '#setupStart',
            title: 'Menú principal',
            useHtml: true,
            content:
              'Si el ingreso es exitoso, accederemos al menú principal de la aplicación, <br> en el cual podremos visualizar las diferentes opciones que Nu Bank nos ofrece.',
          },
          {
            element: '#setupImport2',
            title: 'Flujo depositar',
            useHtml: true,
            content: `¡Vamos a explorar "depositar"!, <br> en esta sección aprenderemos a cómo enviar dinero`,
          },
          {
            element: '#setupOverlay2',
            title: 'Opciones de depósito',
            useHtml: true,
            content:
              'Vemos dos maneras de depositar dinero: "Usando PSE" y "En efectivo". <br> Seleccionamos "Usando PSE" para continuar con el proceso de depósito.',
          },
          {
            element: '#setupStart2',
            title: 'Menú principal',
            useHtml: true,
            content:
              'Si el ingreso es exitoso, accederemos al menú principal de la aplicación, <br> en el cual podremos visualizar las diferentes opciones que Nu Bank nos ofrece.',
          },
        ],
        actions: {
          previousStop: {
            label: 'back',
            buttonClasses: ['ngx-tourguide--button'],
          },
          nextStop: {
            label: 'next',
            buttonClasses: ['ngx-tourguide--button'],
          },
          finishTour: {
            label: 'finish',
            buttonClasses: ['ngx-tourguide--button'],
          },
          skipTour: {
            label: 'skip',
            buttonClasses: ['ngx-tourguide--button'],
          },
        },
      },
      'demo' // 👈 ID del tour original
    );

    // 🔹 TOUR 2: Descripción de la interfaz (NUEVO)
    tourGuideService.register(
      {
        stops: [
          {
            title: 'Recorrido por la interfaz de Nu',
            useHtml: true,
            content:
              'En este recorrido verás el <strong>panel principal</strong>, el <strong>menú de navegación</strong> y los <strong>botones de acción rápida</strong> de la app.',
          },
          {
            element: '#interfazPanelPrincipal',
            title: 'Panel principal',
            useHtml: true,
            content:
              'Aquí ves el <strong>resumen de tu cuenta</strong>, tu saldo disponible y accesos rápidos a acciones como <em>Enviar</em>, <em>Depositar</em> o <em>Pagar</em>.',
          },
          {
            element: '#interfazMenuNavegacion',
            title: 'Menú de navegación',
            useHtml: true,
            content:
              'Este menú te ayuda a moverte entre las secciones principales de la app y acceder rápidamente a <strong>inicio, movimientos, tarjetas y ayuda</strong>.',
          },
          {
            element: '#interfazBotonesAccion',
            title: 'Botones de acción rápida',
            useHtml: true,
            content:
              'Desde estos botones puedes ejecutar acciones frecuentes, como <strong>regresar al menú principal</strong> o confirmar/cancelar un flujo.',
          },
        ],
        actions: {
          previousStop: {
            label: 'back',
            buttonClasses: ['ngx-tourguide--button'],
          },
          nextStop: {
            label: 'next',
            buttonClasses: ['ngx-tourguide--button'],
          },
          finishTour: {
            label: 'finish',
            buttonClasses: ['ngx-tourguide--button'],
          },
          skipTour: {
            label: 'skip',
            buttonClasses: ['ngx-tourguide--button'],
          },
        },
      },
      'interfaz' // 👈 ID del tour nuevo
    );

      // 🔹 TOUR 3: Portada / Menú (NUEVO)
    tourGuideService.register(
      {
        stops: [
          {
            title: 'Bienvenido al manual de Nubank',
            useHtml: true,
            content:
              'Este es el <strong>manual de usuario de la app Nubank</strong>. Desde aquí podrás recorrer todas las secciones: introducción, requisitos, instalación, funciones y más.',
          },
          {
            element: '.sidebar',
            title: 'Menú lateral del manual',
            useHtml: true,
            content:
              'En este <strong>menú lateral</strong> encuentras todas las secciones del manual. Haz clic en cada sección para ver su contenido.',
          },
          {
            element: '.sidebar-toggle--close',
            title: 'Ocultar y volver a mostrar el menú',
            useHtml: true,
            content:
              'Si quieres tener más espacio para leer, puedes <strong>cerrar el menú</strong> con este botón.<br>Cuando el menú esté oculto, verás un botón <strong>“☰ Menú”</strong> arriba a la izquierda para volver a abrirlo.',
          },
        ],
        actions: {
          previousStop: {
            label: 'back',
            buttonClasses: ['ngx-tourguide--button'],
          },
          nextStop: {
            label: 'next',
            buttonClasses: ['ngx-tourguide--button'],
          },
          finishTour: {
            label: 'finish',
            buttonClasses: ['ngx-tourguide--button'],
          },
          skipTour: {
            label: 'skip',
            buttonClasses: ['ngx-tourguide--button'],
          },
        },
      },
      'portada' // 👈 id del tour de portada
    );
  }

  ngAfterViewInit(): void {
  // Aseguramos que arrancamos en la portada y con el sidebar visible
  this.currentSection = 'portada';
  this.sidebarOpen = true;

  // Pequeño delay para que el DOM esté 100% listo
  setTimeout(() => {
    this.tourGuideService.start('portada'); // 👈 usamos el id del tour nuevo
  }, 0);
}


  // Cambiar de sección en el sidebar
  goToSection(id: string) {
    this.currentSection = id;
    // Opcional:
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 🔹 Abrir / cerrar sidebar
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  // Iniciar tour desde la sección "Funciones y características"
  // Tour original (funciones / flujo de login + depositar)
  public startFuncionesTour() {
    this.currentSection = 'funciones';
    this.sidebarOpen = true;

    setTimeout(() => {
      this.tourGuideService.start('demo'); // 👈 usa el ID del tour original
    }, 0);
  }

  // Tour nuevo (descripción de la interfaz)
  public startInterfazTour() {
    this.currentSection = 'interfaz';
    this.sidebarOpen = true;

    setTimeout(() => {
      this.tourGuideService.start('interfaz'); // 👈 usa el ID del tour nuevo
    }, 0);
  }

}

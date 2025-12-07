import { Component } from '@angular/core';
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
  ],
  selector: 'showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
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
    // ⬇️ Tu registro original del tour, sin tocar
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

          {
            element: '#registerTour',
            title: 'Register a tour',
            content:
              'You can register tours from anywhere. This makes sense to split the code to respective modules (e.g. lazy loading).',
          },
          {
            element: '#registerStart',
            useHtml: true,
            title: 'Start a registered Tour',
            content:
              'You can start a registered tour from anywhere. Make sure to prepare your appstate accordingly (e.g. opening the respective page)',
          },
          {
            element: '#inlineHtml',
            title: 'HtmlContent',
            useHtml: true,
            content: `You can use html content. Since this comes with several risks it is disabled by default and can be enabled with <strong>useHtml</strong><br>
              Make sure to sanitize html from unsave sources`,
          },
          {
            element: '#contentTemplateRef',
            title: 'Template content',
            content: `To maximize the customization capabilities use a TemplateRef.<br>
              If needed you can pass any data as content to be used in your template.`,
          },
          {
            element: '#contentTemplate',
            title: 'Angular Template',
            useHtml: true,
            content:
              'You can use <strong>stop.content</strong> as implicit template context',
          },
          {
            element: '#customActionHtml',
            title: 'Button content',
            content: 'You can provide content for any action button.',
          },
          {
            element: '#customActionTs',
            title: 'Customize actions',
            content:
              "You can configure each of the tour's actions. As well as react to its execution.",
          },
          {
            element: '#customActionReplace',
            title: 'Replace actions',
            content:
              'If you wish to proceed your current step with other means. You can replace them with any element and event.',
          },
          {
            element: '#customStops',
            title: 'Hooks',
            content:
              'Each stop provides hooks on entering or leaving it, in case you wish to alter the state of your app.',
          },
          {
            title: 'Customize css',
            useHtml: true,
            content: `You can fully customize css.<br>
              <strong>.tour-guide--overlay</strong> for the overlay over your app<br>
              <strong>.tour-guide--container</strong> for the content containers<br>
              <strong>.tour-guide--stop</strong> for the layout of a stop<br>
              <strong>.tour-guide--skip</strong> additonal class to differentiate the skip container if needed<br>
              <strong>.tour-guide--stop.stop-title</strong> for the stop title<br>
              <strong>.tour-guide--stop.stop-content</strong> for the stop content<br>
              <strong>.tour-guide--stop.stop-counter</strong> for the current stop ident (1/7)<br>
              `,
          },
          {
            title: 'Thank you',
            useHtml: true,
            content: `Thank you for having a look at this little side project.<br>
               Any feedback is welcome`,
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
      'demo'
    );

    // ❌ Antes lo llamabas aquí:
    // this.startTour();
    // ✅ Ahora NO lo llamamos, para que el tour solo se inicie desde el botón.
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
  public startTour() {
    // Nos aseguramos de que la sección de funciones esté visible
    this.currentSection = 'funciones';
    this.sidebarOpen = true;
    this.tourGuideService.start('demo');
  }
}

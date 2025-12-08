import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type GlosarioCategory = 'cuentas' | 'tarjetas' | 'pagos' | 'seguridad' | 'soporte';

interface GlosarioTerm {
  title: string;
  category: GlosarioCategory;
  categoryLabel: string;
  definition: string;
  keywords: string; // para mejorar la búsqueda
}

@Component({
  selector: 'app-glosario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './glosario.component.html',
  styleUrl: './glosario.component.scss',
})
export class GlosarioComponent {
  searchTerm = '';
  activeCategory: GlosarioCategory | 'all' = 'all';

  terms: GlosarioTerm[] = [
    {
      title: 'Cuenta Nu',
      category: 'cuentas',
      categoryLabel: 'Cuentas',
      definition:
        'Producto de depósito de Nu que te permite recibir dinero, hacer transferencias, pagar servicios y ver tus movimientos en tiempo real desde la app.',
      keywords: 'cuenta nu deposito ahorro movimientos saldo transferencias',
    },
    {
      title: 'Tarjeta de crédito Nu',
      category: 'tarjetas',
      categoryLabel: 'Tarjetas',
      definition:
        'Tarjeta de crédito emitida por Nu sin cuota de manejo, administrada desde la app, donde puedes ver tu cupo, movimientos, fecha de corte y pago.',
      keywords: 'tarjeta credito morada plastico nu',
    },
    {
      title: 'Cupo disponible',
      category: 'tarjetas',
      categoryLabel: 'Tarjetas',
      definition:
        'Parte del cupo total de tu tarjeta de crédito que aún puedes usar para compras, avances o pagos. Disminuye cuando haces consumos y aumenta cuando pagas.',
      keywords: 'limite credito cupo total disponible avances compras',
    },
    {
      title: 'Fecha de corte',
      category: 'tarjetas',
      categoryLabel: 'Tarjetas',
      definition:
        'Día del mes en el que se cierra tu periodo de facturación. A partir de esa fecha se genera tu estado de cuenta con el valor a pagar y la fecha de pago.',
      keywords: 'facturacion extracto ciclo de facturacion',
    },
    {
      title: 'Fecha de pago',
      category: 'tarjetas',
      categoryLabel: 'Tarjetas',
      definition:
        'Último día para pagar tu estado de cuenta sin generar intereses por mora. La ves claramente señalada en la app y en tu extracto.',
      keywords: 'vencimiento limite pago intereses mora',
    },
    {
      title: 'Pago mínimo',
      category: 'tarjetas',
      categoryLabel: 'Tarjetas',
      definition:
        'Valor mínimo que debes pagar en tu tarjeta de crédito para mantenerla al día. Pagar solo el mínimo puede generar intereses sobre el saldo restante.',
      keywords: 'cuota minima intereses saldo financiado',
    },
    {
      title: 'Compra en cuotas',
      category: 'pagos',
      categoryLabel: 'Pagos y transferencias',
      definition:
        'Opción que te permite diferir una compra con tu tarjeta de crédito en varias cuotas mensuales, con una tasa de interés y plazo definidos.',
      keywords: 'diferido cuotas financiacion compras',
    },
    {
      title: 'Transferencia',
      category: 'pagos',
      categoryLabel: 'Pagos y transferencias',
      definition:
        'Movimiento de dinero desde tu Cuenta Nu hacia otra cuenta propia o de terceros, ya sea en Nu u otros bancos, usando los datos de la cuenta o alias registrado.',
      keywords: 'enviar dinero cdi cuenta bancaria terceros',
    },
    {
      title: 'Bloqueo temporal',
      category: 'seguridad',
      categoryLabel: 'Seguridad',
      definition:
        'Función de la app que te permite pausar el uso de tu tarjeta sin cancelarla definitivamente. Útil en caso de pérdida momentánea o duda sobre un movimiento.',
      keywords: 'bloquear tarjeta congelar seguridad perdida',
    },
    {
      title: 'Contraseña de acceso',
      category: 'seguridad',
      categoryLabel: 'Seguridad',
      definition:
        'Clave que usas para iniciar sesión en la app de Nu. Debe ser personal, segura y no debe compartirse con nadie.',
      keywords: 'clave login inicio sesion password',
    },
    {
      title: 'Código de verificación',
      category: 'seguridad',
      categoryLabel: 'Seguridad',
      definition:
        'Código de un solo uso que Nu envía por SMS, correo u otro canal para confirmar que eres tú quien está realizando una acción como iniciar sesión o cambiar datos.',
      keywords: 'token sms otp verificacion seguridad',
    },
    {
      title: 'Xpeer',
      category: 'soporte',
      categoryLabel: 'Soporte y ayuda',
      definition:
        'Miembro del equipo de servicio al cliente de Nu que te atiende a través del chat u otros canales para ayudarte a resolver dudas y problemas.',
      keywords: 'servicio al cliente agente soporte chat',
    },
    {
      title: 'Centro de Ayuda Nu',
      category: 'soporte',
      categoryLabel: 'Soporte y ayuda',
      definition:
        'Sección en línea con artículos y guías para casos de emergencia, seguridad y uso de la app, disponible desde la web y desde la app.',
      keywords: 'portal ayuda soporte emergencias seguridad',
    },
    {
      title: 'PQR',
      category: 'soporte',
      categoryLabel: 'Soporte y ayuda',
      definition:
        'Sigla de Peticiones, Quejas y Reclamos. Forma formal de comunicar una inconformidad o solicitud que Nu debe responder dentro de plazos establecidos.',
      keywords: 'peticiones quejas reclamos servicio al cliente',
    },
    {
      title: 'Estado de cuenta',
      category: 'cuentas',
      categoryLabel: 'Cuentas',
      definition:
        'Resumen donde ves tus movimientos, saldos, valores a pagar y fechas importantes de tu tarjeta o cuenta en un periodo determinado.',
      keywords: 'extracto resumen movimientos saldo',
    },
  ];

  setCategory(category: GlosarioCategory | 'all'): void {
    this.activeCategory = category;
  }

  get filteredTerms(): GlosarioTerm[] {
    const term = this.normalize(this.searchTerm);

    return this.terms.filter((t) => {
      const matchCat =
        this.activeCategory === 'all' || this.activeCategory === t.category;

      const text = `${t.title} ${t.definition} ${t.keywords}`;
      const matchText =
        term === '' || this.normalize(text).includes(term);

      return matchCat && matchText;
    });
  }

  private normalize(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}

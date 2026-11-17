import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

/** Vista reutilizable para las secciones del informe. */
@Component({
  selector: 'app-section',
  template: `
    @if (titulo()) {
      <h2 class="section__titulo">{{ titulo() }}</h2>
    }
    <ng-content />
  `,
  styles: `
    .section__titulo {
      margin: 0 0 1rem;
      font-size: 1.5rem;
      font-weight: 600;
    }
  `,
})
export class SectionComponent {
  private readonly route = inject(ActivatedRoute);

  /** Titulo tomado de los datos de la ruta. */
  readonly titulo = toSignal(
    this.route.data.pipe(map((data) => (data['titulo'] as string | undefined) ?? '')),
    { initialValue: '' },
  );
}

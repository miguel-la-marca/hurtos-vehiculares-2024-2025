export interface SectionDef {
  /** Identificador de la ruta: /slug */
  slug: string;
  /** Titulo de la seccion tal como figura en el informe. */
  titulo: string;
}

/**
 * Secciones del informe. Se agrega una entrada por cada sesion de trabajo
 * y la ruta correspondiente se crea de forma automatica.
 */
export const SECTIONS: SectionDef[] = [];

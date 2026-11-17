import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface HealthResponse {
  status: string;
  service: string;
}

export interface SectionsResponse {
  sections: unknown[];
}

/** Cliente de la API Node/Express. */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  health(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>('/api/health');
  }

  sections(): Observable<SectionsResponse> {
    return this.http.get<SectionsResponse>('/api/sections');
  }
}

import { Injectable, signal, Signal } from '@angular/core';
import { Setlist } from '@bpmedley/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SetlistService {
  private mockedSetlists: Signal<Setlist[]> = signal<Setlist[]>([
    {
      id: '1',
      name: 'My First Setlist',
      date: new Date().toISOString(),
      slug: 'my-first-setlist',
    },
    {
      id: '2',
      name: 'My Second Setlist',
      date: new Date().toISOString(),
      slug: 'my-second-setlist',
    },
  ]);

  getAll(): Signal<Setlist[]> {
    return this.mockedSetlists;
  }

  delete(id: string): Promise<void> {
    // Simulate API call
    return new Promise((resolve, reject) => {
      // Simulate success
      setTimeout(() => resolve(), 1000);
      // To simulate error, uncomment the following line:
      // setTimeout(() => reject(new Error('Failed to delete setlist')), 1000);
    });
  }
}

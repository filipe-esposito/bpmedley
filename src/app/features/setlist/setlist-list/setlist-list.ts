import { Component, Signal } from '@angular/core';
import { inject } from '@angular/core';
import { FormatDate } from '@bpmedley/shared/helpers';
import { Setlist } from '@bpmedley/shared/interfaces';
import { RouterLink } from '@angular/router';
import { AlertService, SetlistService } from '@bpmedley/shared/services';

@Component({
  selector: 'bpmedley-setlist-list',
  imports: [RouterLink],
  templateUrl: './setlist-list.html',
  styleUrl: './setlist-list.scss',
})
export class SetlistList {
  private setlistService = inject<SetlistService>(SetlistService);
  private alertService = inject<AlertService>(AlertService);

  setlists: Signal<Setlist[]> = this.setlistService.getAll();

  formatDate(date: string): string {
    return FormatDate.forViewing(date);
  }

  deleteSetlist(id: string) {
    if (confirm('Are you sure you want to delete this list?')) {
      this.setlistService
        .delete(id)
        .then(() => {
          this.alertService.success('Setlist deleted successfully!');
        })
        .catch((error: any) => this.alertService.error(error.error));
    }
  }
}

import { Song } from './song.model';

export interface Setlist {
  id: string;
  name: string;
  date: string;
  songs?: Song[];
  slug: string;
}

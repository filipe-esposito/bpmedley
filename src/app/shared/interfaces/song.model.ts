export enum TimeSignature {
  TIME_SIGNATURE_4_4 = '4/4',
  TIME_SIGNATURE_6_8 = '6/8',
  TIME_SIGNATURE_3_4 = '3/4',
  TIME_SIGNATURE_2_4 = '2/4',
}

export interface Song {
  id?: string;
  name: string;
  bpm: number;
  timeSignature: TimeSignature;
  slug: string;
}

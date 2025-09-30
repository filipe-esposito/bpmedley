export function forViewing(date: string): string {
  let partials = date.split('-');

  return `${partials[2]}/${partials[1]}/${partials[0]}`;
}

export function forStoring(date: string): string {
  if (date.indexOf('/') === -1) {
    return date;
  }

  let partials = date.split('/');

  return `${partials[2]}-${partials[1]}-${partials[0]}`;
}

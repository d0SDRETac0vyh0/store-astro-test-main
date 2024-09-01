export class Formatter {
  static currency(value: number, decimals = 0): string {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: decimals,
    }).format(value);
  }
}

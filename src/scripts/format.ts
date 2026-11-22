import { site } from '../site.config';
export const formatPrice = (n: number) => `${site.currency.symbol}${n.toLocaleString('en-US')}`;
export const formatDate = (d: Date) => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
export const formatCount = (n: number) => `${n.toLocaleString('en-US')}+`;

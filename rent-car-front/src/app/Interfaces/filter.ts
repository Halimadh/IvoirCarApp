import { Brand } from './brand';
import { Model } from './model';
import { Seat } from './seat';

export interface ItemsFilter {
  brands: Brand[];
  models: Model[];
  seats: Seat[];
}

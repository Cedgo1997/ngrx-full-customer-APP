import { CustomersEffects } from './customers.effects';
import { CustomerEffects } from './customer.effects';

export * from './customers.effects';
export * from './customer.effects';

export const EffectsArray: any[] = [CustomersEffects, CustomerEffects];

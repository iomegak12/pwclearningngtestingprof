import { Observable } from 'rxjs';
import { Customer } from './customer';

export interface ICustomerService {
    getCustomers(): Observable<Customer[]>;
}

import { Ticket } from './types';
import { storeModuleFactory } from '../../services/store';

export const TICKET_DOMAIN_NAME = 'tickets';

export const ticketStore = storeModuleFactory<Ticket>(TICKET_DOMAIN_NAME);
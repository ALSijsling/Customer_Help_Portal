import { User } from '../auth/types';
import { Ticket } from '../tickets/types';

export interface Note {
    id: number,
    user_id: User,
    ticket_id: Ticket,
    content: string
}
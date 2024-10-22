import { User } from '../auth/types'
import { Status } from '../../types/types'
import { Category } from '../categories/types'

export interface Ticket {
    id: number,
    title: string,
    categories: Category,
    status: Status,
    creator: User,
    admin: User,
    created_at: Date,
    updated_at: Date,
}
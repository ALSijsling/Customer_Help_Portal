import { User } from '../auth/types'
import { Status } from '../../types/types'

export interface Ticket {
    id: number,
    title: string,
    status: Status,
    created_by: User,
    assigned_to: User
}
import { Paginate } from 'middlewares/pagination'

declare global {
  namespace Express {
    interface Request {
      paginate: Paginate
    }
  }
}
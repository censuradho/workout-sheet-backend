import { Paginate } from 'middlewares/pagination'
import { SignJWTPayload } from 'modules/user/useCases/signIn/signIn.service'

type UserInfo = SignJWTPayload

declare global {
  namespace Express {
    interface Request {
      paginate: Paginate,
      user_info: UserInfo
    }
  }
}
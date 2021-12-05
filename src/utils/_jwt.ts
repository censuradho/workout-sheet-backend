import { verify, sign, decode, SignOptions, Jwt, Secret, VerifyOptions } from 'jsonwebtoken'



export function generateToken (payload: string | object | Buffer, options?: SignOptions) {
  return sign(payload, String(process.env.JWT_SECRET), options)
}

export async function verifyToken (token: string) {
  return new Promise((resolve, reject) => {
    sign(token, String(process.env.JWT_SECRET), (err, decode) => {
      if (err) reject(err)

      resolve(decode)
    })
  })
}
import { verify, sign, decode, SignOptions } from 'jsonwebtoken'



export function generateToken (payload: string | object | Buffer, options?: SignOptions) {
	return sign(payload, String(process.env.JWT_SECRET), options)
}

export function verifyToken (token: string) {
	return verify(token, String(process.env.JWT_SECRET))
}

export function decodeToken (token: string) {
	return decode(token)
}
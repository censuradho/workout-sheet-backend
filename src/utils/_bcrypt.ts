import bcrypt from 'bcrypt'


export async function hash (data: string | Buffer) {
	return await bcrypt.hash(data, 10)
}

export async function compare (data: string | Buffer, encrypted: string) {
	return await bcrypt.compare(data, encrypted)
}
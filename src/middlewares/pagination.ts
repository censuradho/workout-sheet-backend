import { NextFunction, Request, Response } from 'express'

export type Queries<T = Record<string, any>> = T & {
  _page: number,
  _per_page: number
}

export interface Paginate extends Queries{
	_startIndex: number
}

export interface Meta extends Queries {
	_total_pages: number
	_next_page: number
	_previues_page: number
}

export interface Paginated<T = any> {
  meta: Meta;
  data: T[];
}

export function pagination (request: Request, response: Response, next: NextFunction) {
	const { _page, _per_page } = request.query

	const per_page = Number(_per_page) || 10
	const page = Number(_page) || 1
	const startIndex = (page - 1) * per_page

	const paginate: Paginate = {
		_page: page,
		_per_page: per_page,
		_startIndex: startIndex,
	}

	request.paginate = paginate

	next()
}
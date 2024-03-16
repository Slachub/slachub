import { NextFunction, Request, Response } from "express";
export interface HTTPError {
	status?: number;
	message?: string;
	details?: any;
}

export const handle404 = (req: Request, res: Response, next: NextFunction) => {
	res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
};

export const errorHandler = (
	err: BadRequestError,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (err) {
		res
			.status(err.status)
			.json({ message: err.errors.message, details: err.errors.details });
	} else {
		next();
	}
};

export default class BadRequestError extends Error {
	private readonly _status: number;
	private readonly _httpError: HTTPError;

	constructor(status: number, httpError: HTTPError) {
		super(httpError.message || "Bad request");
		this._status = status || 400;
		this._httpError = httpError;

		// Only because we are extending a built in class
		Object.setPrototypeOf(this, BadRequestError.prototype);
	}

	get errors(): HTTPError {
		return {
			status: this._status,
			message: this._httpError.message,
			details: this._httpError.details,
		};
	}

	get status(): number {
		return this._status;
	}
}

export interface IUser {
	name: string;
	age: number;

	roar(): void;
}

export class User implements IUser {
	constructor(public name: string,
				public age: number) { }

	roar(): void {
		console.log('roar!');
	}
}
	


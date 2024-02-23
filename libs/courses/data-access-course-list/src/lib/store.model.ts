export interface Course {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly authors: string[];
  readonly duration: number;
  readonly creationDate: string;
}

export interface Author {
  readonly id: string;
  readonly name: string;
}

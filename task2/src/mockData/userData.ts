export type User = {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeselected: boolean;
}

export const userData: User[] = [
  {
    id: 'hey',
    login: 'hey',
    password: '12345',
    age: 23,
    isDeselected: false
  },
  {
    id: 'wow',
    login: 'wow',
    password: '12345',
    age: 23,
    isDeselected: false
  }
];

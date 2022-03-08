export interface User{
    name: string;
    username: string;
    password: string;
    email: string;
    id: number
}

export const list: User[] = [
    {
        name: 'Sally',
        username: 'seashellSeller',
        password: 'starfish',
        email: 'sheSellsSeashells@gmail.com',
        id: 1,
    },
    {
        name: 'Steve',
        username: 'stevenWilliams67',
        password: 'mustang',
        email: 'swilliam39@newpaltz.edu',
        id: 2,
    },
    {
        name: 'Percy',
        username: 'percyJackson',
        password: 'blueberry',
        email: 'pjackso21@yahoo.com',
        id: 3,
    },
];
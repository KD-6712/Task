import {rest} from 'msw';

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(200),
        ctx.json([{
            name: 'Leanne Graham',
            email: 'Sincere@april.biz',
            phone: '1-770-736-8031 x56442'
        }
        ])
        )
    })
]
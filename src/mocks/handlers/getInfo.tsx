import { http, HttpResponse } from 'msw'
import { createRandomUser, IUser } from '../models/User/user';
 
export const handlers = [
  http.get('/posts', () => {
    let users: IUser[] = new Array(5).fill(createRandomUser());
    users[0] = createRandomUser();
    return HttpResponse.json(users);
  }),
  http.post('/posts', () => {
    console.log('Captured a "POST /posts" request')
  }),
  http.delete('/posts/:id', ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`)
  }),
]
// /src/mocks/models/StudentModel

import { faker } from '@faker-js/faker';

export interface IUser {
    _id: string;
    avatar: string;
    birthday: Date;
    email: string;
    firstName: string;
    lastName: string;
}

 export function createRandomUser(): IUser {
    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };
  }
  
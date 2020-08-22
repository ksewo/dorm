import { Mixin } from '../mixin';

class PersonalData {
  firstName: string;

  lastName: string;

  setPersonalData(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

interface Person extends PersonalData {}

@Mixin([PersonalData])
class Person {
}

test('Person should inherit all PersonalData properties', () => {
  const person = new Person();

  person.setPersonalData('John', 'Doe');

  expect(person.firstName).toEqual('John');
  expect(person.lastName).toEqual('Doe');
});


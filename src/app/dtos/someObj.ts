// export const someObj1 = {
//   firstName: {value: 'Alex', type: 'input'},
//   lastName: {value: 'Zhukovsky', type: 'input'},
//   email: {value: '{firstName},{lastName}@coherentsolutions.com', type: 'computed'}
// };

export class SomeObj {
  firstName: FieldDefinition;
  lastName: FieldDefinition;
  email: FieldDefinition;
}

export interface FieldDefinition {
  value: string;
  type: string;
}

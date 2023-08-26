// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Students, Class, ClassStudents } = initSchema(schema);

export {
  Students,
  Class,
  ClassStudents
};
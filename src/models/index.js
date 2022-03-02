// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Profile, JoinBeta } = initSchema(schema);

export {
  Profile,
  JoinBeta
};
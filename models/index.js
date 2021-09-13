// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Edge, Node } = initSchema(schema);

export {
  Edge,
  Node
};
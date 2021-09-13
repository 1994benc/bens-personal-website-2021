import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EdgeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Edge {
  readonly id: string;
  readonly source?: string;
  readonly target?: string;
  readonly label?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Edge, EdgeMetaData>);
  static copyOf(source: Edge, mutator: (draft: MutableModel<Edge, EdgeMetaData>) => MutableModel<Edge, EdgeMetaData> | void): Edge;
}

export declare class Node {
  readonly id: string;
  readonly label: string;
  readonly description?: string;
  readonly isCopyEnabled?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Node, NodeMetaData>);
  static copyOf(source: Node, mutator: (draft: MutableModel<Node, NodeMetaData>) => MutableModel<Node, NodeMetaData> | void): Node;
}
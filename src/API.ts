/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEdgeInput = {
  id?: string | null,
  source?: string | null,
  target?: string | null,
  label?: string | null,
  _version?: number | null,
};

export type ModelEdgeConditionInput = {
  source?: ModelStringInput | null,
  target?: ModelStringInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelEdgeConditionInput | null > | null,
  or?: Array< ModelEdgeConditionInput | null > | null,
  not?: ModelEdgeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Edge = {
  __typename: "Edge",
  id: string,
  source?: string | null,
  target?: string | null,
  label?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEdgeInput = {
  id: string,
  source?: string | null,
  target?: string | null,
  label?: string | null,
  _version?: number | null,
};

export type DeleteEdgeInput = {
  id: string,
  _version?: number | null,
};

export type CreateNodeInput = {
  id?: string | null,
  label: string,
  description?: string | null,
  isCopyEnabled?: boolean | null,
  _version?: number | null,
};

export type ModelNodeConditionInput = {
  label?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isCopyEnabled?: ModelBooleanInput | null,
  and?: Array< ModelNodeConditionInput | null > | null,
  or?: Array< ModelNodeConditionInput | null > | null,
  not?: ModelNodeConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Node = {
  __typename: "Node",
  id: string,
  label: string,
  description?: string | null,
  isCopyEnabled?: boolean | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNodeInput = {
  id: string,
  label?: string | null,
  description?: string | null,
  isCopyEnabled?: boolean | null,
  _version?: number | null,
};

export type DeleteNodeInput = {
  id: string,
  _version?: number | null,
};

export type ModelEdgeFilterInput = {
  id?: ModelIDInput | null,
  source?: ModelStringInput | null,
  target?: ModelStringInput | null,
  label?: ModelStringInput | null,
  and?: Array< ModelEdgeFilterInput | null > | null,
  or?: Array< ModelEdgeFilterInput | null > | null,
  not?: ModelEdgeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEdgeConnection = {
  __typename: "ModelEdgeConnection",
  items?:  Array<Edge | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelNodeFilterInput = {
  id?: ModelIDInput | null,
  label?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isCopyEnabled?: ModelBooleanInput | null,
  and?: Array< ModelNodeFilterInput | null > | null,
  or?: Array< ModelNodeFilterInput | null > | null,
  not?: ModelNodeFilterInput | null,
};

export type ModelNodeConnection = {
  __typename: "ModelNodeConnection",
  items?:  Array<Node | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateEdgeMutationVariables = {
  input: CreateEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type CreateEdgeMutation = {
  createEdge?:  {
    __typename: "Edge",
    id: string,
    source?: string | null,
    target?: string | null,
    label?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEdgeMutationVariables = {
  input: UpdateEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type UpdateEdgeMutation = {
  updateEdge?:  {
    __typename: "Edge",
    id: string,
    source?: string | null,
    target?: string | null,
    label?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEdgeMutationVariables = {
  input: DeleteEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type DeleteEdgeMutation = {
  deleteEdge?:  {
    __typename: "Edge",
    id: string,
    source?: string | null,
    target?: string | null,
    label?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type CreateNodeMutation = {
  createNode?:  {
    __typename: "Node",
    id: string,
    label: string,
    description?: string | null,
    isCopyEnabled?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNodeMutationVariables = {
  input: UpdateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type UpdateNodeMutation = {
  updateNode?:  {
    __typename: "Node",
    id: string,
    label: string,
    description?: string | null,
    isCopyEnabled?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNodeMutationVariables = {
  input: DeleteNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type DeleteNodeMutation = {
  deleteNode?:  {
    __typename: "Node",
    id: string,
    label: string,
    description?: string | null,
    isCopyEnabled?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEdgeQueryVariables = {
  id: string,
};

export type GetEdgeQuery = {
  getEdge?:  {
    __typename: "Edge",
    id: string,
    source?: string | null,
    target?: string | null,
    label?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEdgesQueryVariables = {
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEdgesQuery = {
  listEdges?:  {
    __typename: "ModelEdgeConnection",
    items?:  Array< {
      __typename: "Edge",
      id: string,
      source?: string | null,
      target?: string | null,
      label?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEdgesQueryVariables = {
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEdgesQuery = {
  syncEdges?:  {
    __typename: "ModelEdgeConnection",
    items?:  Array< {
      __typename: "Edge",
      id: string,
      source?: string | null,
      target?: string | null,
      label?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNodeQueryVariables = {
  id: string,
};

export type GetNodeQuery = {
  getNode?:  {
    __typename: "Node",
    id: string,
    label: string,
    description?: string | null,
    isCopyEnabled?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNodesQueryVariables = {
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNodesQuery = {
  listNodes?:  {
    __typename: "ModelNodeConnection",
    items?:  Array< {
      __typename: "Node",
      id: string,
      label: string,
      description?: string | null,
      isCopyEnabled?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNodesQueryVariables = {
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNodesQuery = {
  syncNodes?:  {
    __typename: "ModelNodeConnection",
    items?:  Array< {
      __typename: "Node",
      id: string,
      label: string,
      description?: string | null,
      isCopyEnabled?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateEdgeSubscription = {
  onCreateEdge?:  {
    __typename: "Edge",
    id: string,
    source?: string | null,
    target?: string | null,
    label?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEdgeSubscription = {
  onUpdateEdge?:  {
    __typename: "Edge",
    id: string,
    source?: string | null,
    target?: string | null,
    label?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEdgeSubscription = {
  onDeleteEdge?:  {
    __typename: "Edge",
    id: string,
    source?: string | null,
    target?: string | null,
    label?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNodeSubscription = {
  onCreateNode?:  {
    __typename: "Node",
    id: string,
    label: string,
    description?: string | null,
    isCopyEnabled?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNodeSubscription = {
  onUpdateNode?:  {
    __typename: "Node",
    id: string,
    label: string,
    description?: string | null,
    isCopyEnabled?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNodeSubscription = {
  onDeleteNode?:  {
    __typename: "Node",
    id: string,
    label: string,
    description?: string | null,
    isCopyEnabled?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

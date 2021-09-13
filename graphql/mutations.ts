/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEdge = /* GraphQL */ `
  mutation CreateEdge(
    $input: CreateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    createEdge(input: $input, condition: $condition) {
      id
      source
      target
      label
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateEdge = /* GraphQL */ `
  mutation UpdateEdge(
    $input: UpdateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    updateEdge(input: $input, condition: $condition) {
      id
      source
      target
      label
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteEdge = /* GraphQL */ `
  mutation DeleteEdge(
    $input: DeleteEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    deleteEdge(input: $input, condition: $condition) {
      id
      source
      target
      label
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode(
    $input: CreateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    createNode(input: $input, condition: $condition) {
      id
      label
      description
      isCopyEnabled
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateNode = /* GraphQL */ `
  mutation UpdateNode(
    $input: UpdateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    updateNode(input: $input, condition: $condition) {
      id
      label
      description
      isCopyEnabled
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode(
    $input: DeleteNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    deleteNode(input: $input, condition: $condition) {
      id
      label
      description
      isCopyEnabled
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

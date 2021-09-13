/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEdge = /* GraphQL */ `
  query GetEdge($id: ID!) {
    getEdge(id: $id) {
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
export const listEdges = /* GraphQL */ `
  query ListEdges(
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEdges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEdges = /* GraphQL */ `
  query SyncEdges(
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEdges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getNode = /* GraphQL */ `
  query GetNode($id: ID!) {
    getNode(id: $id) {
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
export const listNodes = /* GraphQL */ `
  query ListNodes(
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNodes = /* GraphQL */ `
  query SyncNodes(
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;

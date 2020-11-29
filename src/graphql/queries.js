/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      bytes {
        items {
          id
          byte_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        bytes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listBytes = /* GraphQL */ `
  query ListBytes(
    $filter: ModelByteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBytes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        index
        size
        content
        owner
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getByte = /* GraphQL */ `
  query GetByte($id: ID!) {
    getByte(id: $id) {
      id
      index
      size
      content
      owner
      price
      orders {
        items {
          id
          byte_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

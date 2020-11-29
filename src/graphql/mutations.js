/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createByte = /* GraphQL */ `
  mutation CreateByte(
    $input: CreateByteInput!
    $condition: ModelByteConditionInput
  ) {
    createByte(input: $input, condition: $condition) {
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
export const updateByte = /* GraphQL */ `
  mutation UpdateByte(
    $input: UpdateByteInput!
    $condition: ModelByteConditionInput
  ) {
    updateByte(input: $input, condition: $condition) {
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
export const deleteByte = /* GraphQL */ `
  mutation DeleteByte(
    $input: DeleteByteInput!
    $condition: ModelByteConditionInput
  ) {
    deleteByte(input: $input, condition: $condition) {
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
export const createByteOrder = /* GraphQL */ `
  mutation CreateByteOrder(
    $input: CreateByteOrderInput!
    $condition: ModelByteOrderConditionInput
  ) {
    createByteOrder(input: $input, condition: $condition) {
      id
      byte_id
      order_id
      order {
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
      createdAt
      updatedAt
      byte {
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
    }
  }
`;
export const updateByteOrder = /* GraphQL */ `
  mutation UpdateByteOrder(
    $input: UpdateByteOrderInput!
    $condition: ModelByteOrderConditionInput
  ) {
    updateByteOrder(input: $input, condition: $condition) {
      id
      byte_id
      order_id
      order {
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
      createdAt
      updatedAt
      byte {
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
    }
  }
`;
export const deleteByteOrder = /* GraphQL */ `
  mutation DeleteByteOrder(
    $input: DeleteByteOrderInput!
    $condition: ModelByteOrderConditionInput
  ) {
    deleteByteOrder(input: $input, condition: $condition) {
      id
      byte_id
      order_id
      order {
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
      createdAt
      updatedAt
      byte {
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
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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

import { gql } from 'apollo-boost';

import {
    addItemToCart,
    filterItemFromCart,
    getCartItemsCount,
    getCartTotal,
    removeItemFromCart
} from './cart.utils';

export const typeDefs = gql`
    extend type Item {
        quantity: Int
    }

    extend type DateTime {
        nanoseconds: Int!
        seconds: Int!
    }

    extend type User {
        id: ID!
        displayName: String!
        email: String!
        createdAt: DateTime!
    }

    extend type Mutation {
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]!
        RemoveItemFromCart(item: Item!): [Item]!
        ClearItemFromCart(item: Item!): [Item]!
    }
`;

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`;

const GET_CART_ITEMS_COUNT = gql`
    {
        cartItemsCount @client
    }
`;

const GET_CART_TOTAL = gql`
    {
        cartTotal @client
    }
`;

const GET_CURRENT_USER = gql`
    {
        currentUser @client
    }
`;

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN
            });

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            })
        },
        addItemToCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: GET_CART_ITEMS
            });
            
            const newCartItems = addItemToCart(cartItems, item);

            cache.writeQuery({
                query: GET_CART_ITEMS_COUNT,
                data: { cartItemsCount: getCartItemsCount(newCartItems) }
            });

            cache.writeQuery({
                query: GET_CART_TOTAL,
                data: { cartTotal: getCartTotal(newCartItems) }
            });
            
            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { cartItems: newCartItems }
            });

            return newCartItems;
        },
        removeItemFromCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: GET_CART_ITEMS
            });

            const newCartItems = removeItemFromCart(cartItems, item);

            cache.writeQuery({
                query: GET_CART_ITEMS_COUNT,
                data: { cartItemsCount: getCartItemsCount(newCartItems) }
            });

            cache.writeQuery({
                query: GET_CART_TOTAL,
                data: { cartTotal: getCartTotal(newCartItems) }
            });
            
            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { cartItems: newCartItems }
            });

            return newCartItems;
        },
        clearItemFromCart: (_root, { item }, { cache }) => {
            const { cartItems } = cache.readQuery({
                query: GET_CART_ITEMS
            });

            const newCartItems = filterItemFromCart(cartItems, item);

            cache.writeQuery({
                query: GET_CART_ITEMS_COUNT,
                data: { cartItemsCount: getCartItemsCount(newCartItems) }
            });

            cache.writeQuery({
                query: GET_CART_TOTAL,
                data: { cartTotal: getCartTotal(newCartItems) }
            });
            
            cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { cartItems: newCartItems }
            });

            return newCartItems;
        },
        setCurrentUser: (_root, { user }, { cache }) => {
            cache.writeQuery({
                query: GET_CURRENT_USER,
                data: { currentUser: user }
            });

            return user;
        }
    }
}
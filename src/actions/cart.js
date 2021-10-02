// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 * Add
 * @param {*} cart 
 * @param {*} product 
 * @returns 
 */
const Add = (cart, product) => {
    return{
        type: 'ADD_TO_CART',
        cart,
        product
    }
}
/**
 * AddItem
 * @param {/} cart 
 * @param {*} product 
 * @returns 
 */
const AddItem = (cart, product) => {
    return{
        type: 'ADD_ITEM',
        cart,
        product
    }
}
/**
 * RemoveItem
 * @param {*} cart 
 * @param {*} product 
 * @returns 
 */
const RemoveItem = (cart, product) => {
    return{
        type: 'REMOVE_ITEM',
        cart,
        product
    }
}
/**
 * DeleteItem
 * @param {*} cart 
 * @param {*} product 
 * @returns 
 */
const DeleteItem = (cart, product) => {
    return{
        type: 'DELETE_ITEM',
        cart,
        product
    }
}
/**
 * ChangeCart
 * @param {*} localCart 
 * @returns 
 */
const ChangeCart = (localCart) => {
    return{
        type: 'CHANGE_CART',
        localCart
    }
}

export default {
    Add,
    AddItem,
    RemoveItem,
    DeleteItem,
    ChangeCart
}

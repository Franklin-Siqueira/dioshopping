// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { combineReducers } from 'redux';

import products from './products';
import cart from './cart';

export default combineReducers({
    products,
    cart
})

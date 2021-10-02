// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { createStore } from 'redux';

import rootReducer from '../../reducers';

const store = createStore(rootReducer)

export default store;

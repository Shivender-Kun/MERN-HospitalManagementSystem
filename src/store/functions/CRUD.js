import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions

export const Added = createAction("Added");

export const Updated = createAction("Updated");

export const Deleted = createAction("Deleted");

// Initial state

const initialState = {
  Added: false,
  Updated: false,
  Deleted: false,
};

// Reducers

export const crudReducer = createReducer(initialState, {
  Added: (user, action) => {
    user.Added = true;
    user.Updated = false;
    user.Deleted = false;
  },
  Updated: (user, action) => {
    user.Updated = true;
    user.Added = false;
    user.Deleted = false;
  },
  Deleted: (user, action) => {
    user.Deleted = true;
    user.Added = false;
    user.Updated = false;
  },
});


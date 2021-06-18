import { createAction, createReducer } from "@reduxjs/toolkit";

export const messageSent = createAction("messageSent");

export const messageReceived = createAction("messageReceived");

const initialState = {
  sent: [],
  received: [],
  all: [],
};

export const messageReducer = createReducer(initialState, {
  messageSent: (state, action) => {
    state.sent.push(action.payload.message);
    state.all.push(action.payload);
  },
  messageReceived: (state, action) => {
    state.received.push(action.payload);
    state.all.push(action.payload);
  },
});

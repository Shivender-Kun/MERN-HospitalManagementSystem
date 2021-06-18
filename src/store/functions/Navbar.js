import { createAction, createReducer } from "@reduxjs/toolkit";

export const Show = createAction("Show");
export const Open = createAction("Open");

const initialState = {
  showNavbar: false,
  showChatbot: false,
};

export const navbarReducer = createReducer(initialState, {
  Show: (state, action) => {
    state.showNavbar = !state.showNavbar;
  },
  Open: (state, action) => {
    state.showChatbot = !state.showChatbot;
  },
});

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../ReduxExamples/CounterRedux";

export const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
  },
});

export default function Page() {
  return null;
}

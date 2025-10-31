/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../../../Database";
type Assignment = any;

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: (db as any).assignments ?? [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === action.payload._id ? { ...a, ...action.payload } : a
      );
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== action.payload
      );
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;

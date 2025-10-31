/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../Database";

type Enrollment = { user: string; course: string };

type State = {
  enrollments: Enrollment[];
  showAllCourses: boolean;
};

const initialState: State = {
  enrollments: (db as any).enrollments ?? [],
  showAllCourses: false,
};

const slice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    toggleShowAll: (s) => {
      s.showAllCourses = !s.showAllCourses;
    },
    enroll: (s, a: PayloadAction<Enrollment>) => {
      const exists = s.enrollments.some(
        (e) => e.user === a.payload.user && e.course === a.payload.course
      );
      if (!exists) s.enrollments.unshift(a.payload);
    },
    unenroll: (s, a: PayloadAction<Enrollment>) => {
      s.enrollments = s.enrollments.filter(
        (e) => !(e.user === a.payload.user && e.course === a.payload.course)
      );
    },
  },
});

export const { toggleShowAll, enroll, unenroll } = slice.actions;
export default slice.reducer;

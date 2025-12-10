"use client";

import "./style.css";
import { Provider } from "react-redux";
import store from "./store";
import KambazNavigation from "./Navigation";

export default function KambazLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div style={{ marginLeft: "120px" }} className="p-4">
          {children}
        </div>
      </div>
    </Provider>
  );
}
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./style.css";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wd-kambaz">
     <div className="d-flex">
       <div>
         <KambazNavigation />
       </div>
       <div className="wd-main-content-offset p-3 flex-fill">
         {children}
       </div>
     </div>
   </div>
  );
}

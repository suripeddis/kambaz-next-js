// app/(Kambaz)/Account/page.tsx
import { redirect } from "next/navigation";
export default function AccountIndex() {
  redirect("/Account/Signin/");
}
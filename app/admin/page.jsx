import React from "react";
import AddFilm from "@/app/admin/AddFilm";
import Support from "@/app/admin/Support";
import Users from "@/app/admin/Users";
export default function page() {
  return (
    <>
      <h1>админка</h1>
      <AddFilm />
      <Support />
      <Users />
    </>
  );
}

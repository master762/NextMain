"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AddFilm from "@/app/admin/AddFilm";
import Support from "@/app/admin/Support";
import Users from "@/app/admin/Users";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (!session || session.user.role !== "admin") {
      setIsAuthorized(false);
      router.push("/");
    } else {
      setIsAuthorized(true);
    }
  }, [session, status, router]);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  if (isAuthorized === false) {
    return null;
  }

  return (
    <>
      <h1>Админка</h1>
      <AddFilm />
      <Support />
      <Users />
    </>
  );
}

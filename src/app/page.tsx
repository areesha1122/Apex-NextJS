"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const user: any = useUser();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, []);
}

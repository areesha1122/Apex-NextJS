"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useLogin() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit() {
    localStorage.setItem("user", JSON.stringify({ token: "sdf" }));
    router.push("/dashboard");
  }

  return {
    setEmail,
    setPassword,
    handleSubmit,
  };
}

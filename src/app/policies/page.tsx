"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import Policies from "@/components/policies/policies.component";

export default function Home() {
  return <Auth component={<Policies />} type={AUTH.PRIVATE} />;
}

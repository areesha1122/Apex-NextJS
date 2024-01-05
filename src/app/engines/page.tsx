"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import { Engines } from "@/components/engines/engines.component";

export default function Home() {
  return <Auth component={<Engines />} type={AUTH.PRIVATE} />;
}


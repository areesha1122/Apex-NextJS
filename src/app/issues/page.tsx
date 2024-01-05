"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import Issues from "@/components/issues/issues.component";

export default function Home() {
  return <Auth component={<Issues />} type={AUTH.PRIVATE} />;
}

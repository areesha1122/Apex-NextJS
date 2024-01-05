"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import SessionExplorer from "@/components/session-explorer/session-explorer.component";

export default function Home() {
  return <Auth component={<SessionExplorer />} type={AUTH.PRIVATE} />;
}

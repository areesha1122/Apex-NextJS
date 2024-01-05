"use client";

import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

export default function useAuthenticatedNav() {
  const router = useRouter();
  const pathname = usePathname();
  const initialTab = pathname.slice(1);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [navValue, setNavValue] = useState(initialTab);
  const [feedbackModal, setFeedbackModal] = useState(false);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavValue = (item: any) => {
    router.push(`/${item}`);
    setNavValue(item);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return {
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    setAnchorElNav,
    setAnchorElUser,
    handleLogout,
    navValue,
    handleNavValue,
    feedbackModal, 
    setFeedbackModal
  };
}

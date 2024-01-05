"use client";

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/provider/store";
import { getPolicies } from "@/provider/features/policies/policies.slice";

export default function usePolicies() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();
  const [policyData, setPolicyData] = useState<any>([]);
  const dispatch = useAppDispatch();

  const moveRouter = (data: any) => {
    setPolicyData(data);
  };

  useEffect(() => {
    dispatch(getPolicies({ successCallBack: moveRouter }));
  }, []);

   
  return {
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    policyData
  };
}

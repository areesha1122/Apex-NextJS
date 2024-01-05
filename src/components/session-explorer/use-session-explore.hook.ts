"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { SESSION_EXPLORE_DATA } from "./session-explore.constant";

export default function useSessionExplore() {
  const [engineName, setEngineName] = useState<any>([]);
  const [userName, setUserName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();
  const [dateShow, setDateShow] = useState<any>();
  const [finalData, setFinalData] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleChange = (event: any) => {
    setUserName(event.target.value as string);
  };

  const [session, setSession] = useState<any>("All Engines");
  const SessionHandler = (event: any) => {
    setSession(event.target.value as string);
  };


  const dateHandler = (newDate: any) => {
    const formatter :any= dayjs(newDate).format("MMM D, YYYY h:mm A");
    setDateRange(formatter);
    
  };

  const handleSearch = (e:any) =>{
    setSearchQuery(e.target.value);
  }

  
  const filterData = () => {
    const filteredData = SESSION_EXPLORE_DATA.filter((item) => {
      let engineFlag = false;
      let userFlag = false;
      let dateFlag = false;
      let textFlag = false;
  
      if (engineName.length === 0 || engineName.includes(item.violationCat.split(" ")[0])) {
        engineFlag = true;
      }
  
      if (userName === "" || item.mails === userName) {
        userFlag = true;
      }
  
      if (dateRange[0] === null || dateRange[1] === null) {
        dateFlag = true;
      } else {
        const startDate = dayjs(dateRange[0]);
        const endDate = dayjs(dateRange[1]);
        const itemDate = dayjs(item.time);
        dateFlag = itemDate.isAfter(startDate) && itemDate.isBefore(endDate);
      }
      const itemText = Object.values(item).join(" ").toLowerCase();
      textFlag = itemText.includes(searchQuery);
  
      return engineFlag && userFlag && dateFlag && textFlag;
    });
  
    return filteredData;
  };
  

  useEffect(() => {
    setFinalData(filterData());
   
  }, [engineName, userName, dateShow, dateRange, searchQuery]);

  const handleClearAll = () => {
    setUserName("");
    setDateShow(undefined);
    setEngineName([]);
    setDateRange([null, null]);
  };


  const handleAutocompleteChange = (e: any, newValue: any) => {
    setSearchQuery(newValue);
  };

  const allOptions: any = [];
  SESSION_EXPLORE_DATA?.map(({mails,time, engineType, violationCat}: any) => {
    const entries = Object.values({mails,time, engineType, violationCat});
    entries.forEach((option:any) => {
      allOptions.push(option);
    });
  });

  return {
    engineName,
    setEngineName,
    userName,
    handleChange,
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    dateHandler,
    finalData,
    SessionHandler,
    session,
    handleClearAll,
    dateShow,
    setUserName,
    startDate,
    endDate,
    setDateRange,
    handleSearch,
    searchQuery,
    handleAutocompleteChange,
    allOptions
  };
}

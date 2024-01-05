import {
  getEngine,
  singleEngine,
} from "@/provider/features/engines/engines.slice";
import { useAppDispatch } from "@/provider/store";
import { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];
export default function useSetting() {
  const [show, SetShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [personName, setPersonName] = useState<string[]>([]);
  const [selectedNames, setSelectedNames] = useState(["Apex user"]);
  const [enginesData, setEnginesData] = useState<any>([]);
  const [age, setAge] = useState("");
  const [chips, setChips] = useState(["Apple", "Banana", "Cherry"]);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const HandlePassword = () => {
    SetShow(!show);
  };

  const moveSingleRouter = (data: any) => {
    if (data) {
      setOpen(true);
      setSelectedItemId(data);
    }
  };
  const handleClickOpen = (itemId: any) => {
    const id = itemId.id;
    dispatch(singleEngine({ id, successCallBack: moveSingleRouter }));
    // setSelectedItemId(itemId);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItemId(null);
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const enableChnage = (event: any) => {
    setAge(event.target.value as string);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const moveRouter = (data: any) => {
    setEnginesData(data);
  };

  // useEffect(() => {
  //   dispatch(getEngine({ successCallBack: moveRouter }));
  // }, []);

  return {
    SetShow,
    show,
    HandlePassword,
    open,
    selectedItemId,
    handleClickOpen,
    handleClose,
    handleChange,
    names,
    personName,
    enableChnage,
    setSelectedNames,
    selectedNames,
    chips,
    setChips,
    inputValue,
    handleInputChange,
    enginesData,
  };
}

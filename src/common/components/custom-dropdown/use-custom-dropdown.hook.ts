"use-client";
import { FILTERS_DROPDOWN } from "@/components/issues/issues.constant";

export const useCustom = ({setSearchQuery}: any) => {
  const handleAutocompleteChange = (e: any, newValue: any) => {
    setSearchQuery(newValue);
  };

  const allOptions: any = [];
  FILTERS_DROPDOWN?.forEach((item: any, index: any) => {
    const singleItemOptions = item.options;
    singleItemOptions.forEach((option: string) => {
      allOptions.push(option);
    });
  });
  return {
    handleAutocompleteChange,
    setSearchQuery,
    allOptions
  };
};

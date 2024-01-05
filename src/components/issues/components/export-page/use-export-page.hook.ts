import { useRef } from "react";
import * as XLSX from "xlsx";
import { ISSUES_TABLE_DATA, ISSUES_TABLE_HEAD } from "../../issues.constant";

export default function useExportPage() {
  const reportTemplateRef = useRef<any>(null);

  const handleGenerateExcel = () => {
    const headers = ISSUES_TABLE_HEAD.map((head) => head.value);
    const tableData = [headers];
    for (const issue of ISSUES_TABLE_DATA) {
      const row = headers.map((header) => {
        const keyObj = ISSUES_TABLE_HEAD.find((head) => head.value === header);
        const key = keyObj ? keyObj.keyValue : null;
        return key ? (issue as any)[key] : "";
      });
      tableData.push(row);
    }
    const ws = XLSX.utils.aoa_to_sheet(tableData);
    ws["!cols"] = Array(headers.length).fill({ wch: 20 });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Issues");
    XLSX.writeFile(wb, "issues.xlsx");
  };

  return {
    handleGenerateExcel,
    reportTemplateRef,
  };
}

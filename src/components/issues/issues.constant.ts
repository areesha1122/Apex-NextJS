import * as echarts from "echarts";
import CodeIcon from "@/common/assets/images/code-icon.svg";
import PIIIcon from "@/common/assets/images/pll-icon.svg";
import PCIIcon from "@/common/assets/images/pci-icon.svg";
import AccessDataIcon from "@/common/assets/images/access-data-icon.svg";
import GPT4Icon from "@/common/assets/images/gpt4-icon.svg";
import GPT3Icon from "@/common/assets/images/gpt3-icon.svg";
import AzureIcon from "@/common/assets/images/azure-icon.svg";
import BardIcon from "@/common/assets/images/bard-icon.svg";

export const SENSITIVE_DATATYPE_CHART = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
    orient: "vertical",
    top: "5%",
    left: "left",
    data: ["Code", "PII", "PCI", "Access Data"],
    itemGap: 10,
    itemWidth: 6,
    itemHeight: 18,
    textStyle: {
      color: "#667085",
      fontWeight: 600,
      padding: [0, 0, 0, 7],
    },
  },
  series: [
    {
      name: "Sensitive data types",
      type: "pie",
      height: 120,
      center: ["50%", "65%"],
      radius: ["100%", "75%"],
      startAngle: -45,
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 83.2, name: "Code" },
        { value: 5.26, name: "PII" },
        { value: 4.21, name: "PCI" },
        { value: 4.21, name: "Access Data" },
      ],
      color: ["#7F56D9", "#E31B54", "#EC4A0A", "#12B76A"],
    },
  ],
};

export const SENSITIVE_DATATYPE_DATA = [
  { id: 1, value: 83.2, name: "Code", icon: CodeIcon },
  { id: 2, value: 5.26, name: "PII", icon: PIIIcon },
  { id: 3, value: 4.21, name: "PCI", icon: PCIIcon },
  { id: 4, value: 4.21, name: "Access Data", icon: AccessDataIcon },
];

export const ISSUES_BY_ENGINE_DATA = [
  { id: 1, value: 83.2, name: "Gpt 4", icon: GPT4Icon },
  { id: 2, value: 5.26, name: "Gpt 3 5 Turbo", icon: GPT3Icon },
  { id: 3, value: 4.21, name: "Azure R&D", icon: AzureIcon },
  { id: 4, value: 4.21, name: "Bard", icon: BardIcon },
];

export const ISSUES_BY_ENGINE_CHART = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    show: false,
    orient: "vertical",
    top: "5%",
    left: "left",
    data: ["Gpt 4", "Gpt 3 5 Turbo", "Azure R&D", "Bard"],
    itemGap: 10,
    itemWidth: 6,
    itemHeight: 18,
    textStyle: {
      color: "#667085",
      fontWeight: 600,
      padding: [0, 0, 0, 7],
    },
  },
  series: [
    {
      name: "Issues by Engine",
      type: "pie",
      height: 120,
      center: ["50%", "65%"],
      radius: ["100%", "75%"],
      startAngle: -45,
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 2,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 44.21, name: "Gpt 4" },
        { value: 3.2, name: "Gpt 3 5 Turbo" },
        { value: 5.26, name: "Azure R&D" },
        { value: 44.21, name: "Bard" },
      ],
      color: ["#7F56D9", "#53B1FD", "#EC4A0A", "#12B76A"],
    },
  ],
};

export const TOTAL_ISSUES_CHART = {
  height: 80,
  width: "92%",
  tooltip: {
    trigger: "axis",
    show: false,
    axisPointer: {
      show: false,
      type: "cross",
      label: {
        backgroundColor: "#FEF3F2",
      },
    },
  },
  legend: {
    show: false,
    data: ["Email"],
  },
  toolbox: {
    show: false,
  },
  grid: {
    show: false,
  },
  xAxis: [
    {
      show: false,
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      show: false,
      type: "value",
    },
  ],
  series: [
    {
      name: "Union Ads",
      type: "line",
      cursor: 'default', 
      stack: "Total",
      data: [20, 10, 13, 18, 11, 8, 0],
      color: ["#F04438"],
      gradientColor: ["#d92d2014"],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#d92d2014",
          },
          {
            offset: 1,
            color: "#fef9f86e",
          },
        ]),
      },
      step: false,
      smooth: true,
      showSymbol: false,
    },
  ],
};

export const SEVERITY_DATA = [
  { id: 1, name: "Critical", value: 10, color: "#912018" },
  { id: 2, name: "High", value: 20, color: "#D92D20" },
  { id: 3, name: "Medium", value: 30, color: "#FB6514" },
  { id: 4, name: "Low", value: 40, color: "#12B76A" },
];

export const TOP_ISSUES_DATA = [
  { id: 1, value: "User is sharing PII", date: "Aug 14, 2023 2:06 PM" },
  {
    id: 2,
    value:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh ",
    date: "Aug 14, 2023 2:06 PM",
  },
  {
    id: 3,
    value:
      "Nullam massa massa, vulputate id quam non, pretium pulvinar quam. In hac habitasse platea ",
    date: "Aug 14, 2023 2:06 PM",
  },
];

export const FILTERS_DROPDOWN = [
  {
    id: 1,
    value: "Engine",
    keyValue: "engine",
    options: ["GPT 4", "GPT 3.5"],
  },
  {
    id: 2,
    value: "User",
    keyValue: "user",
    options: ["abc@untitledui.com", "cdf@untitledui.com"],
  },
  {
    id: 3,
    value: "Violation Category",
    keyValue: "violation",
    options: ["PII", "Code"],
  },
  {
    id: 4,
    value: "Source",
    keyValue: "source",
    options: ["Apexchat1", "Apexchat2", "Apexchat3", "Apexchat4"],
  },
  {
    id: 5,
    value: "Severity",
    keyValue: "severity",
    options: ["Critical", "High", "Medium"],
  },
  {
    id: 6,
    value: "Conversation ID",
    keyValue: "conversationalId",
    options: [
      "023fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
      "033fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
      "043fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
      "013fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    ],
  },
];

export const ISSUES_TABLE_DATA = [
  {
    id: 1,
    timestamp: "Sep 14, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat1",
    engine: "GPT 4",
    conversationalId: "023fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "abc@untitledui.com",
    severity: "Critical",
    status: "Open",
    chat: "Subject of the chat",
  },
  {
    id: 2,
    timestamp: "Aug 15, 2023 2:06 PM",
    violation: "PII",
    source: "Apexchat2",
    engine: "GPT 3.5",
    conversationalId: "033fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "cdf@untitledui.com",
    severity: "High",
    status: "Closed",
    chat: "Subject of the chat",
  },
  {
    id: 3,
    timestamp: "Oct 15, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat3",
    engine: "GPT 4",
    conversationalId: "043fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "fgi@untitledui.com",
    severity: "High",
    status: "Pending",
    chat: "Subject of the chat",
  },
  {
    id: 4,
    timestamp: "Nov 15, 2023 2:06 PM",
    violation: "PII",
    source: "Apexchat4",
    engine: "GPT 4",
    conversationalId: "013fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "jkl@untitledui.com",
    severity: "Medium",
    status: "Pending",
    chat: "Subject of the chat",
  },
  {
    id: 5,
    timestamp: "Dec 15, 2023 2:06 PM",
    violation: "Code",
    source: "Apexchat5",
    engine: "GPT 4",
    conversationalId: "053fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
    user: "olivia@untitledui.com",
    severity: "Medium",
    status: "Open",
    chat: "Subject of the chat",
  },
];

export const ISSUES_TABLE_HEAD = [
  { id: 1, value: "Timestamp", keyValue: "timestamp" },
  { id: 2, value: "Violation Category", keyValue: "violation" },
  { id: 3, value: "Source", keyValue: "source" },
  { id: 4, value: "Engine", keyValue: "engine" },
  { id: 5, value: "Conversation ID", keyValue: "conversationalId" },
  { id: 6, value: "User Email", keyValue: "user" },
  { id: 7, value: "Severity", keyValue: "severity" },
  { id: 8, value: "Status", keyValue: "status" },
  { id: 9, value: "Chat", keyValue: "chat" },
];

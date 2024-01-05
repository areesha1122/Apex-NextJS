import * as echarts from "echarts";
import ChatGPTIcon from "@/common/assets/images/gpt.svg";
import CopilotIcon from "@/common/assets/images/panda.svg";
import BardIcon from "@/common/assets/images/shine.svg";
import AzureIcon from "@/common/assets/images/azure.svg";
import AssistantIcon from "@/common/assets/images/emoji.svg";

export const ISSUES_PER_ENGINE_DATA = [
  { id: 1, name: "ChatGPT GPT 4", value: 36.3, color: "#B42318" },
  { id: 2, name: "Azure R&D", value: 25.26, color: "#D92D20" },
  { id: 3, name: "GPT 3.5", value: 14.21, color: "#F97066" },
  { id: 4, name: "Co-Pilot", value: 14.21, color: "#FDA29B" },
  { id: 5, name: "Bard", value: 11.5, color: "#FEE4E2" },
];

export const ENGINE_DATA = [
  { id: 1, name: "ChatGPT GPT 4", value: 86.3, color: "#1570EF" },
  { id: 2, name: "Azure R&D", value: 5.26, color: "#53B1FD" },
  { id: 3, name: "GPT 3.5", value: 4.21, color: "#84CAFF" },
  { id: 4, name: "Co-Pilot, Bard", value: 4.21, color: "#B2DDFF" },
  { id: 5, name: "Bard", value: 1.5, color: "#D1E9FF" },
];

export const TOP_ISSUES_DASHBOARD = [
  { id: 1, value: "User is sharing PII" },
  {
    id: 2,
    value: "ChatGPT 3.5 is ...",
  },
  {
    id: 3,
    value:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    id: 4,
    value: "lorem ipsum dolor sit amet consectetuer adipiscing elit",
  },
  {
    id: 5,
    value:
      "In hac habitasse platea dictumst. Proin ornare porta vulputate. Mauris augue sem, pharetra a scelerisque",
  },
];

export const ACTIVE_ENGINE_DATA = [
  { id: 1, value: "OpenAI ChatGPT", icon: ChatGPTIcon },
  {
    id: 2,
    value: "Github Co-Pilot",
    icon: CopilotIcon,
  },
  {
    id: 3,
    value: "HuggingFace OpenAssistant",
    icon: AssistantIcon,
  },
  {
    id: 4,
    value: "Google Bard",
    icon: BardIcon,
  },
  {
    id: 5,
    value: "Azure OpenAI",
    icon: AzureIcon,
  },
];

export const SESSION_USER_CHART = {
  height: 90,
  tooltip: {
    trigger: "axis",
    show: true,
    axisPointer: {
      show: false,
      type: "cross",
      label: {
        backgroundColor: "#DAEFFF",
        color: "#000000",
        fontWeight: "550",
      },
    },
  },
  legend: {
    show: false,
    data: ["Session over time, Active User"],
  },
  toolbox: {
    show: false,
  },
  grid: {
    show: false,
  },
  xAxis: [
    {
      show: true,
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  ],
  yAxis: [
    {
      show: true,
      axisLabel: {
        show: false,
      },
      splitNumber: 3,
    },
  ],
  series: [
    {
      name: "Session over time, Active User",
      type: "line",
      stack: "Total",
      data: [20, 10, 13, 18, 11, 8, 10, 32, 21, 24, 26, 28],
      color: ["#1570EF"],
      gradientColor: ["#DAEFFF"],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#DAEFFF",
          },
          {
            offset: 1,
            color: "#F7FBFF",
          },
        ]),
      },
      step: false,
      smooth: true,
      showSymbol: false,
    },
  ],
};

export const DATA_DASHBOARD_CHART = {
  height: 200,
  tooltip: {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Incoming Data", "Outgoing Data"],
    icon: "circle",
    right: 10,
    top: 2,
    itemWidth: 7,
    itemHeight: 7,
    textStyle: {
      color: "#667085",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      show: false,
    },
  ],
  yAxis: [
    {
      show: true,
      axisLabel: {
        show: true,
      },
      name: false,
      axisLine: { onZero: true },
      splitLine: { show: true },
      splitArea: { show: false },
      splitNumber: 3,
      type: "category",
      axisTick: {
        show: false,
      },
      data: ["Other", "Access Data", "PCI", "PII", "Code"],
    },
  ],

  series: [
    {
      name: "Outgoing Data",
      type: "bar",
      stack: "Total",
      cursor: 'default',
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [400, 302, 230, 190, 190],
      color: ["#53B1FD"],
    },
    {
      name: "Incoming Data",
      cursor: 'default',
      type: "bar",
      stack: "Total",
      label: {
        show: false,
        position: "left",
      },
      emphasis: {
        focus: "series",
      },
      data: [-230, -334, -200, -334, -190],
      color: ["#7F56D9"],
    },
  ],
};

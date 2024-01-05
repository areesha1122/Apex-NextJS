export const descriptionData = [
  {
    id: 1,
    value:
      "The main purpose of data access control is to determine that the company provides access to each user within the organization while maintaining compliance with its policies and regulations. ",
  },
  {
    id: 2,
    value:
      "Although these policies are made after several considerations and rules, they lie in the category of privacy, security, and compliance. ",
  },
  {
    id: 3,
    value:
      "Through data access control, organizations are able to protect data by ensuring that only authorized individuals can use data from their repositories. ",
  },
  {
    id: 4,
    value:
      "Moreover, it prevents any unauthorized person from accessing sensitive data.",
  },
];

export const ISSUES_DATA = {
  tooltip: {
    trigger: "item",
    axisPointer: {
      type: "shadow",
    },
    borderColor: "transparent",
    formatter: function (params: any) {
      const { seriesName, value, color, name: month } = params;
      return `
        <div>
          <div><strong>${month}</strong></div>
          <div>
            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color};"></span>
            ${seriesName}: ${value}
          </div>
        </div>`;
    },
  },
  legend: {
    show: false,
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
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
      type: "value",
    },
  ],
  series: [
    {
      name: "Email",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [20, 10, 13, 18, 11, 8, 10, 32, 21, 24, 26, 28],
      color: ["#D92D20"],
    },
    {
      name: "Union Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [20, 10, 13, 18, 11, 8, 10, 32, 21, 24, 26, 28],
      color: ["#FB6514"],
    },
    {
      name: "Video Ads",
      type: "bar",
      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [20, 10, 13, 18, 11, 8, 10, 32, 21, 24, 26, 28],
      color: ["#12B76A"],
    },
  ],
};

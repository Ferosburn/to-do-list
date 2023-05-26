import sortLatest from "./assets/images/sort-latest.svg";
import sortOldest from "./assets/images/sort-oldest.svg";
import sortAZ from "./assets/images/sort-az.svg";
import sortZA from "./assets/images/sort-za.svg";
import sortUnfinished from "./assets/images/sort-unfinished.svg";

export const priorityList = [
  { name: "Very High", color: "bg-priority-very-high", value: "very-high" },
  { name: "High", color: "bg-priority-high", value: "high" },
  { name: "Medium", color: "bg-priority-medium", value: "normal" },
  { name: "Low", color: "bg-priority-low", value: "low" },
  { name: "Very Low", color: "bg-priority-very-low", value: "very-low" },
];

export const sortList = [
  { value: "latest", name: "Terbaru", icon: sortLatest },
  { value: "oldest", name: "Terlama", icon: sortOldest },
  { value: "az", name: "A-Z", icon: sortAZ },
  { value: "za", name: "Z-A", icon: sortZA },
  { value: "unfinished", name: "Belum Selesai", icon: sortUnfinished },
];

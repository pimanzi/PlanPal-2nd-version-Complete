import { status } from "../interfaces";

export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
export const getBarColor = (status: status): string => {
  switch (status) {
    case "Completed":
      return "#56af91";
    case "In Progress":
      return "#69b1e5";
    case "To do":
      return "#d49049";
    default:
      return "#8884d8";
  }
};

export const formatShortDate = (date: Date): string =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
  }).format(new Date(date));

import React from "react";

export default function formattedDate(props) {
  let response = props.response;
  let timestamp = new Date(response.data.dt) * 1000;
  let date = new Intl.DateTimeFormat("en-UK", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(timestamp);
  return date;
}

"use client";

import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

const toHtmlDate = (d: Date) => d.toISOString().slice(0, 10); 

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  useEffect(() => {
    setStartDate(new Date());
  }, []);

  if (!startDate) {
    return (
      <div id="wd-date-state-variables">
        <h2>Date State Variables</h2>
        <hr />
      </div>
    );
  }

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{startDate.toISOString()}</h3>
      <h3>{toHtmlDate(startDate)}</h3>

      <FormControl
        type="date"
        value={toHtmlDate(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
      <hr />
    </div>
  );
}
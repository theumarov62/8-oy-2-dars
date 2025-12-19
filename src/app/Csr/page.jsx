"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardTitle } from "@/pages/ui/card";
import { useState } from "react";

function CSR() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleClickSelect(value) {
    setLoading(true);
    fetch(`https://jsonbek.uz/api/todos?style=${value}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return <div className="text-center mt-50 text-[40px]">Loading . . .</div>;
  }
  return (
    <section>
      <div className="container max-w-[1400px] ml-auto mr-auto">
        <div className="text-[40px] text-center bg-blue-300 mt-4 rounded">
          <h2>
            Selectordan o'zingizga yoqqan{" "}
            <span>
              <mark className="rounded pl-2 pr-2 ">janr</mark>
            </span>{" "}
            tanlang
          </h2>
        </div>
        <div className="mt-10">
          <Select onValueChange={handleClickSelect}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="comedy">Comedy</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="dorama">Dorama</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-4 gap-4 text-center mt-4">
          {data
            ? data.map(({ id, title }) => {
                return (
                  <Card key={id} className="w-[340px]">
                    <CardTitle>{title}</CardTitle>
                  </Card>
                );
              })
            : []}
        </div>
      </div>
    </section>
  );
}

export default CSR;

"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardTitle } from "@/pages/ui/card";

let result = [];

function Ssr() {
  function handleSelectValue(value) {
    fetch(`https://jsonbek.uz/api/todos?style=${value}`)
      .then((res) => res.json())
      .then((res) => {
        result = res;
        console.log(result);
      })
      .catch((err) => console.error(err));
  }

  return (
    <section>
      {result
        ? result.map(({ id, title }) => {
            return (
              <Card key={id}>
                <CardTitle>{title}</CardTitle>
              </Card>
            );
          })
        : []}
      <div className="container max-w-[1400px] ml-auto mr-auto">
        <div className="text-[40px] text-center bg-blue-300 mt-4 rounded">
          <h2>
            Selectordan o'zingizga yoqqan
            <span>
              <mark className="rounded pl-2 pr-2">janr</mark>
            </span>{" "}
            tanlang
          </h2>
        </div>
        <div className="mt-10">
          <Select onValueChange={handleSelectValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="comedy">Comedy</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="drama">Drama</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}

export default Ssr;

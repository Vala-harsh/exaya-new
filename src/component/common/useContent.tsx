import React from "react";
import path from "path";
import { promises as fs } from "fs";

export const fetchContent = async (item: string) => {
  const filePath = path.join(process.cwd(), "/src/content/", item);
  const fileContents = await fs.readFile(filePath, "utf8");
  return fileContents;
};

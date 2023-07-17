"use client";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { BsCheckAll } from "react-icons/bs";
import { Input } from "shad/components/ui/input";

export default function Home() {
  const [copied, setCopied] = useState("");
  const [text, setText] = useState("");

  const handleInputChange = e => {
    const { value } = e.target;
    setText(value);
  };

  const handleCopy = () => {
    if (text) {
      setCopied(text);
      navigator.clipboard.writeText(text);
      setTimeout(() => setCopied(""), 3000);
    }
  };

  return (
    <main className="main-container">
      <div className="p-5 flex gap-4 w-90">
        <Input placeholder="Enter the text here...." onChange={handleInputChange} />
        <div
          className="copy-container flex border rounded p-2 min-w-fit items-center gap-2 cursor-pointer"
          onClick={() => handleCopy()}
        >
          <span className="text-[10px]">{copied ? "Copied" : "Copy to Clipboard"}</span>
          <span>{copied ? <BsCheckAll /> : <BiCopy />}</span>
        </div>
      </div>
    </main>
  );
}

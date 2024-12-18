"use client";

import { Bot, Play, User } from "lucide-react";
import { useState } from "react";

type MainMenuProps = {
  handleSelectFirstTurn: (role: "user" | "ai") => void;
};

export default function MainMenu({ handleSelectFirstTurn }: MainMenuProps) {
  const [isUser, setIsUser] = useState(true);

  return (
    <div className="w-full max-w-md p-8 my-8 rounded-xl bg-cyan-900">
      <h4 className="text-center text-2xl">PICK WHO FIRST TURN</h4>
      <div className="flex w-full p-4 bg-cyan-950 rounded-xl mt-4">
        <button
          className={`w-full flex justify-center items-center ${
            isUser && "bg-cyan-100 rounded-xl p-4 text-cyan-950"
          }`}
          onClick={() => setIsUser(true)}
        >
          <User size={28} />
        </button>
        <button
          className={`w-full flex justify-center items-center ${
            !isUser && "bg-cyan-100 rounded-xl p-4 text-cyan-950"
          }`}
          onClick={() => setIsUser(false)}
        >
          <Bot size={28} />
        </button>
      </div>
      <button
        className="w-full flex gap-2 justify-center items-center p-4 bg-amber-500 rounded-xl mt-4 text-cyan-950 shadow-[0_8px_0_0] shadow-amber-600"
        onClick={() => handleSelectFirstTurn(isUser ? "user" : "ai")}
      >
        <Play /> <span className="text-xl font-semibold">Play</span>
      </button>
    </div>
  );
}

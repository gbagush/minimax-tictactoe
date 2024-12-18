"use client";

interface AlertProps {
  status: "user" | "ai" | "draw";
  isOpen: boolean;
  onClose: () => void;
}

export default function Alert({ status, isOpen, onClose }: AlertProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="flex flex-col items-center w-full bg-cyan-950 px-12 py-8 shadow-lg animate-fade-in text-center">
        <div
          className={`text-4xl font-bold mb-2 ${
            status === "ai"
              ? "text-sky-400"
              : status === "user"
              ? "text-amber-500"
              : "text-white"
          }`}
        >
          {status === "ai"
            ? "AI Wins!"
            : status === "user"
            ? "You Win!"
            : "It's a Draw!"}
        </div>
        <div className="text-gray-300 text-lg">
          {status === "draw" ? "Good game!" : "Game Over!"}
        </div>
        <button
          className="mt-6 flex gap-2 justify-center items-center px-6 py-3 bg-amber-500 rounded-xl text-cyan-950 shadow-[0_8px_0_0] shadow-amber-600"
          onClick={onClose}
        >
          <span className="text-xl font-semibold">Play Again!</span>
        </button>
      </div>
    </div>
  );
}

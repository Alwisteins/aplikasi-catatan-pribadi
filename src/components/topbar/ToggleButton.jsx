import { useState } from "react";

export default function ToggleButton({ onChangeTheme }) {
  const [enabled, setEnabled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleOnClick = () => {
    setEnabled(!enabled);
    setIsDark(!isDark);
    onChangeTheme(!isDark);
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={handleOnClick}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-[#5F5F5F]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5F5F5F]"
          ></div>
        </label>
      </div>
    </div>
  );
}

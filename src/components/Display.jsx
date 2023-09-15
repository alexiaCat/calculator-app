export const Display = ({ value, themeClass }) => {
  return (
    <div className={`md:h-32 h-16 w-full rounded-2xl flex items-center justify-end font-bold body ${themeClass}`}>
      <p className="text-white md:text-[55px] text-[30px] px-8 font-ibm-plex-mono">{value}</p>
    </div>
  );
};

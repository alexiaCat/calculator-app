export const Display = ({ value }) => {
  return (
    <div className="h-32 w-full rounded-2xl flex items-center justify-end font-bold bg-black">
      <p className="text-white text-[55px] px-8 font-ibm-plex-mono">{value}</p>
    </div>
  );
};

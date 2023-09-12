export const Display = ({ value }) => {
  return (
    <div className="h-32 w-full rounded-2xl flex items-center font-bold bg-black text-[50px]">
      <p className="text-white font-ibm-plex-mono px-8 text-right flex-grow justify-end">{value}</p>
    </div>
  );
};

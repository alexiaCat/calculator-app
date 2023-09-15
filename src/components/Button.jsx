export const Button = ({ label, onClick, themeClass, isDeleteButton }) => {
  const isResetButton = isDeleteButton && themeClass;

  return (
    <button className={`rounded-[15px] md:px-8 px-0 py-2 button ${themeClass} ${isResetButton ? 'reset' : ''}`} onClick={onClick}>
     <p className="font-ibm-plex-mono font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">{label}</p>
    </button>
  );
};

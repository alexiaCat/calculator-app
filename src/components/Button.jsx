export const Button = ({ label, onClick, themeClass, isDeleteButton }) => {
  const isResetButton = isDeleteButton && themeClass;

  return (
    <button className={`rounded-[15px] px-8 py-2 button ${themeClass} ${isResetButton ? 'reset' : ''}`} onClick={onClick}>
      <p className="font-ibm-plex-mono  font-bold  text-[40px]">{label}</p>
    </button>
  );
};

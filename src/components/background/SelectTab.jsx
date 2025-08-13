function SelectTab({ tab, handleClick }) {
  return (
    <>
      {/*선택 탭*/}
      <ul className="flex h-10 w-fit rounded-2xl bg-grayscale1">
        <li
          className="flex items-center justify-center w-[118px] sm:w-[122px] "
          onClick={handleClick}
        >
          color
        </li>
        <li
          className="flex items-center justify-center w-[118px] sm:w-[122px] "
          onClick={handleClick}
        >
          image
        </li>
      </ul>
    </>
  );
}

export default SelectTab;

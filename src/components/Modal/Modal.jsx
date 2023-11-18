export function Modal({ handleClickNo, handleClickYes }) {
  return (
    <>
      <p>Are you sure you want to remove this user?</p>
      <ul>
        <li>
          <button type="button" onClick={handleClickYes}>
            Yes
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClickNo}>
            No
          </button>
        </li>
      </ul>
    </>
  );
}

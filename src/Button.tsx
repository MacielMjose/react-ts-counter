import { Action } from "./App";

interface Props {
  action: Action;
  clickHandler: (action: Action) => void;
}

function Button({ action, clickHandler }: Props) {
  return (
    <>
      <button onClick={() => clickHandler(action)}>
        {action.toUpperCase()}
      </button>
    </>
  );
}

export default Button;

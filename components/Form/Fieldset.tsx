import React from "react";
import Icon from "../Icons/Icon";

interface FieldsetProps {
  title: string;
  children?: React.ReactChild;
  oneLine?: boolean;
}

function Fieldset({ title, children, oneLine = false }: FieldsetProps) {
  return (
    <fieldset className={`option ${oneLine ? `oneline` : ``}`}>
      <div
        className="option__header"
        style={{ marginBottom: !oneLine ? `.5rem` : `0` }}
      >
        <legend className="option__header__title">
          <Icon title={title} />
          {title}
        </legend>
      </div>
      {children}
    </fieldset>
  );
}

export default Fieldset;

import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionCheckbox from "./QuestionCheckbox";

type ComponentInfoType = {
  fe_id: string;
  type: string;
  isHidden: string;
  props: any;
};

export const getComponent = (comp: ComponentInfoType) => {
  const { fe_id, type, isHidden, props = {} } = comp;

  if (isHidden) return null;

  if (type === "questionInput") {
    return <QuestionInput fe_id={fe_id} props={props} />;
  }

  if (type === "questionRadio") {
    return <QuestionRadio fe_id={fe_id} props={props} />;
  }

  if (type === "questionCheckbox") {
    return <QuestionCheckbox fe_id={fe_id} props={props} />;
  }

  return null;
};

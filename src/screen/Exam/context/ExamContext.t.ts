import { UseFormReturn } from "react-hook-form";
import { examListType } from "./hook/useExam";

type ToBack = () => void;
type ToNext = () => void;

export type ExamContextType = {
  examList: examListType;
  form: UseFormReturn;
  currentExamIndex: number;
  toBack: ToBack;
  toNext: ToNext;
  currentName: string;
};

import { useMemo } from "preact/hooks";
import { rawExamList } from "../../constant/exam";

export type examType = {
  question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  answer: string;
};
export type examListType = Array<examType>;

export const useExamList = (): examListType => {
  const examList = useMemo(() => {
    const indexList = new Set<number>();
    while (indexList.size < 20) {
      const randomIndex = Math.floor(Math.random() * rawExamList.length);
      indexList.add(randomIndex);
    }
    const resultSet = new Set();
    for (const index of indexList) {
      const exam: examType = rawExamList[index];
      resultSet.add(exam);
    }
    const resultList: examListType = Array.from(
      resultSet,
      (item) => item as examType
    );
    return resultList;
  }, []);

  return examList;
};

import { create } from "zustand";
import { examListType } from "../screen/Exam/context/hook/useExam";
import { FieldValues } from "react-hook-form";

type LeaderBoard = {
  leaderBoardList: Array<{ user: string; score: number }>;
  onFinish: (user: string, examList: examListType, value: FieldValues) => void;
};

export const useLeaderBoard = create<LeaderBoard>((set) => {
  return {
    leaderBoardList: [],
    onFinish: (user, examList, value) => {
      return set((state) => {
        const { answers } = value;
        const score = answers.filter(
          (answer: string, index: number) => answer === examList[index].answer
        ).length;

        return {
          ...state,
          leaderBoardList: [...state.leaderBoardList, { user, score }],
        };
      });
    },
  };
});

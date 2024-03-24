import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import { useExamList } from './hook/useExam';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ExamContextType } from './ExamContext.t';

const ExamContext = createContext<ExamContextType | null>(null);

export const ExamContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const examList = useExamList();
  const [currentExamIndex, setCurrentExamIndex] = useState<number>(0);
  const form = useForm();
  const currentName = useMemo(
    () => `answers[${currentExamIndex}]`,
    [currentExamIndex]
  );

  const toLogin = useCallback(() => {
    navigate('');
  }, []);

  const toLeaderBoard = useCallback(() => {
    navigate('');
  }, []);

  const toBack = useCallback(() => {
    setCurrentExamIndex((index) => index - 1);
  }, []);

  const toNext = () => {
    setCurrentExamIndex((index) => index + 1);
  };

  const value = {
    form,
    examList,
    currentExamIndex,
    toLogin,
    toLeaderBoard,
    toBack,
    toNext,
    currentName,
  };
  return <ExamContext.Provider value={value}>{children}</ExamContext.Provider>;
};

export const useExamContext = () => {
  const value = useContext(ExamContext);

  if (!value) {
    throw new Error(`useExamContext should be used within ExamContextProvider`);
  }
  return value;
};

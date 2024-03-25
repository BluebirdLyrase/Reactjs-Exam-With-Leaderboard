import { useMemo } from 'preact/hooks';
import { Col, Gap, Row } from '../../../style';
import { Divider } from '../component/Divider';
import { RadioButton } from '../component/RadioInput';
import { useExamContext } from '../context/ExamContext';

export const ExamContent = () => {
  const { currentExamIndex, examList, currentName } = useExamContext();
  return (
    <>
      <h3>
        {currentExamIndex + 1}. {examList[currentExamIndex].question}
      </h3>
      <Divider />
      <Gap />
      <Row>
        <Choice
          name={currentName}
          value='A'
          text={examList[currentExamIndex].A}
        />
        <Gap />
        <Choice
          name={currentName}
          value='B'
          text={examList[currentExamIndex].B}
        />
        <Gap />
        <Choice
          name={currentName}
          value='C'
          text={examList[currentExamIndex].C}
        />
        <Gap />
        <Choice
          name={currentName}
          value='D'
          text={examList[currentExamIndex].D}
        />
      </Row>
    </>
  );
};

const Choice: React.FC<{
  value: string;
  name: string;
  text: string;
}> = ({ value, name, text }) => {
  return (
    <Col>
      <Row>
        <Col width='15%'>
          <RadioButton key={`${name}-${value}`} name={name} value={value} />
        </Col>
        <Col width='85%'>{text}</Col>
      </Row>
    </Col>
  );
};

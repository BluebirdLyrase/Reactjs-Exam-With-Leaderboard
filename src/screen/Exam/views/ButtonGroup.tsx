import { Col, Gap, Row } from '../../../style';
import {
  BackButton,
  ExistButton,
  FinishButton,
  NextButton,
} from '../component/Button';
import { Divider } from '../component/Divider';
import { useExamContext } from '../context/ExamContext';

export const ButtonGroup = () => {
  const { currentExamIndex, toNext, toBack, form, currentName } =
    useExamContext();

  return (
    <>
      <Divider />
      <Gap />
      <Row justify={'space-between'}>
        <Col width='30%'>
          {currentExamIndex != 0 ? (
            <BackButton toBack={toBack} />
          ) : (
            <ExistButton />
          )}
        </Col>
        <Col width='30%'>
          {currentExamIndex != 19 ? (
            <NextButton toNext={toNext} form={form} currentName={currentName} />
          ) : (
            <FinishButton form={form} currentName={currentName} />
          )}
        </Col>
      </Row>
    </>
  );
};

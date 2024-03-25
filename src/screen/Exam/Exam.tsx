import { Row, Col, Card, CenteredContainer, VerticalRow } from '../../style';
import { BackButton, NextButton } from './component/Button';
import { Divider } from './component/Divider';
import { ExamContextProvider } from './context/ExamContext';
import { ButtonGroup } from './views/ButtonGroup';
import { ExamContent } from './views/ExamContent';

export function Exam() {
  return (
    <ExamContextProvider>
      <CenteredContainer>
        <Card height={'80%'}>
          <VerticalRow>
            <Col>
              <ExamContent />
            </Col>
            <Col>
              <ButtonGroup />
            </Col>
          </VerticalRow>
        </Card>
      </CenteredContainer>
    </ExamContextProvider>
  );
}

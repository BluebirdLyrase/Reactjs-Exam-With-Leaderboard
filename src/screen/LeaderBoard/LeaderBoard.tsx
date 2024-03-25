import {
  Card,
  CenteredContainer,
  Col,
  Gap,
  Row,
  VerticalRow,
} from '../../style';
import { Divider } from '../Exam/component/Divider';
import { Board } from './component/Board';
import { RetryButton } from './component/RetryButton';

export function LeaderBoard() {
  return (
    <CenteredContainer>
      <Card minHeight={'80%'}>
        <VerticalRow>
          <Col>
            <Row>
              <Col align='center'>
                <h1>Leader Board</h1>
              </Col>
              <Col>
                <Divider />
              </Col>
              <Col>
                <Board />
              </Col>
            </Row>
          </Col>
          <Col>
            <RetryButton />
          </Col>
        </VerticalRow>
      </Card>
    </CenteredContainer>
  );
}

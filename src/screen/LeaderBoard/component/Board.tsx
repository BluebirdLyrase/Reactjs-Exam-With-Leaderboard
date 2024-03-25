import { useLeaderBoard } from '../../../store/useLeaderBoard';
import { Col, Gap, Row } from '../../../style';

export const Board = () => {
  const leaderBoardList = useLeaderBoard((state) => state.leaderBoardList);
  return (
    <Row>
      <Col width='50%'>
        <h3>User</h3>
      </Col>
      <Col align='center' width='50%'>
        <h3>Score</h3>
      </Col>
      {leaderBoardList
        .sort((a, b) => b.score - a.score)
        .map(({ user, score }, index) => {
          return (
            <>
              <Col>
                <Gap />
              </Col>
              <Col width='50%'>
                {index + 1}. {user}
              </Col>
              <Col align='center' width='50%'>
                {score}/20
              </Col>
            </>
          );
        })}
    </Row>
  );
};

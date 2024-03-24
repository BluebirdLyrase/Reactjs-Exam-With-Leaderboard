import { InputText } from './component/InputText';
import { useForm, FormProvider } from 'react-hook-form';
import { Card, CenteredContainer, EnterButton } from './style';
import { Row, Col } from '../../style';

export function Home() {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <CenteredContainer>
        <Card>
          <Row>
            <Col width={`100%`}>
              <InputText name={'username'} placeholder={'Enter Your Name'} />
            </Col>
            <Col width={`100%`}>
              <EnterButton>Enter</EnterButton>
            </Col>
          </Row>
        </Card>
      </CenteredContainer>
    </FormProvider>
  );
}

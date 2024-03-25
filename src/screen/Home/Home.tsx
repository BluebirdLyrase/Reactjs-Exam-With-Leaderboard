import { InputText } from './component/InputText';
import { EnterButton } from './component/EnterButton';
import { useForm, FormProvider } from 'react-hook-form';
import { Row, Col, Card, CenteredContainer, Gap } from '../../style';
export function Home() {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <CenteredContainer>
        <Card>
          <Row>
            <Col>
              <InputText name={'username'} placeholder={'Enter Your Name'} />
            </Col>
            <Col>
              <Gap />
            </Col>
            <Col>
              <EnterButton form={form} />
            </Col>
          </Row>
        </Card>
      </CenteredContainer>
    </FormProvider>
  );
}

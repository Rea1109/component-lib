import HomeButton from '../../components/Icon/HomeButton';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

const initValue = {
  item: [],
};

const Form = () => {
  const { handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: initValue,
  });

  return (
    <>
      <HomeButton />
      <Container>
        <form onSubmit={handleSubmit(data => console.log(data))}>
          <div>
            <input type="checkbox" value="all" />
            <label>전체선택</label>
          </div>
          <div>
            <input type="checkbox" value={1} />
            <label>1번아이템</label>
          </div>
          <div>
            <input type="checkbox" value={2} />
            <label>2번아이템</label>
          </div>
          <button type="submit">전송</button>
        </form>
      </Container>
    </>
  );
};

export default Form;

const Container = styled.div`
  width: 90vw;
  height: 80vh;
  margin: auto;
  margin-top: 100px;
  background-color: white;
`;

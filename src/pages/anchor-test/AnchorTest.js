import styled from '@emotion/styled';
import HomeButton from '../../components/Icon/HomeButton';

const AnchorTest = () => {
    const handleScroll = ref => () => {
        console.dir(ref.current.scrollHeight);
        window.scrollTo({ top: ref.current.scrollHeight });
    };

    return (
        <>
            <Container>
                <HomeButton />
                <ProductTop>
                    <Text>Top</Text>
                </ProductTop>
                <ProductMiddle>
                    <Navbar>
                        <span>Section 1</span>
                        <span>Section 3</span>
                        <span>Section 2</span>
                        <span>Section 4</span>
                    </Navbar>
                    <Section1>
                        <Text>Section 1</Text>
                    </Section1>
                    <Section2>
                        <Text>Section 2</Text>
                    </Section2>
                    <Section3>
                        <Text>Section 3</Text>
                    </Section3>
                    <Section4>
                        <Text>Section 4</Text>
                    </Section4>
                </ProductMiddle>
            </Container>
        </>
    );
};

export default AnchorTest;

const Container = styled.div`
    width: 80vw;
    height: 80vh;
    padding: 20px;
    margin: auto;
    margin-top: 100px;
    border-radius: 10px;
    background-color: white;
    overflow: scroll;
`;

const Text = styled.h1`
    font-size: 50px;
    color: white;
`;

const ProductTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #ae9991;
`;

const ProductMiddle = styled.div`
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px;
`;

const Navbar = styled.nav`
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80px;
    border-radius: 10px;
    background-color: #433c24;
    font-weight: bolder;
    color: white;

    span {
        opacity: 0.5;
        cursor: pointer;

        :hover {
            opacity: 1;
        }
    }
`;

const Section1 = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    margin: 10px 0px;
    border-radius: 10px;
    background-color: #ffecb4;
`;

const Section2 = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 450px;
    margin: 10px 0px;
    border-radius: 10px;
    background-color: #e5d4a2;
`;

const Section3 = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
    margin: 10px 0px;
    border-radius: 10px;
    background-color: #a09471;
`;

const Section4 = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    margin: 10px 0px;
    border-radius: 10px;
    background-color: #71643d;
`;

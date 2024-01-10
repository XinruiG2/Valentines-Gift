import { React, useEffect } from 'react'
import { styled, keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const FadeInContainer = styled.div`
    opacity: 0;
    animation: fadeIn 0.75s forwards;
`;

const Container = styled(FadeInContainer)`
    animation: ${fadeIn} 0.75s forwards;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    font-family: 'Inter', serif;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 27px 34px;
    box-sizing: border-box;
    overflow: hidden;
    background: linear-gradient(to bottom, rgb(244, 239, 237) 36%, rgb(224, 219, 217) 36%, rgb(224, 219, 217) 100%);
`;

const TopLeft = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: start;
    color: rgb(108,100,91);
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 4.5rem;
    transition: all 0.35s ease-in-out;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }
`;

const BottomRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: end;
    text-align: right;
    color: rgb(108,100,91);
`;

const Wrapper = styled.div`
    width: 50%;
`;

const PageTwo = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page3');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page1');
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [navigate]);

  return (
    <Container>
        <TopLeft>
            <Text>It's only been 2 months...</Text>
        </TopLeft>
        <BottomRight>
            <Wrapper>
                <Text>But we’ve</Text> 
                <Text>already made so</Text>
                <Text>many special</Text>
                <Text>memories</Text>
                <Text>together.</Text>
            </Wrapper>
            
        </BottomRight>
    </Container>
  )
}

export default PageTwo
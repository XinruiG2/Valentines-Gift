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
    align-items: start;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 30px 35px;
    background-color: rgb(244, 239, 237);
`;

const Text = styled.div`
    font-weight: 800;
    font-size: 2.75rem;
    transition: all 0.35s ease-in-out;
    padding-bottom: 7px;
    color: rgb(108,100,91);

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }
`;

const TextRight = styled.div`
    font-weight: 800;
    font-size: 2.75rem;
    transition: all 0.35s ease-in-out;
    padding-bottom: 7px;
    color: rgb(108,100,91);
    text-align: right;

    &:hover {
        cursor: pointer;
        color: rgb(178,95,105);
    }
`;


const PageTen = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            navigate('/page11');
        }
        if (event.key === 'ArrowLeft') {
            navigate('/page9');
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [navigate]);

  return (
    <Container>
        <Text>I love so many things about you...</Text>
        <Text style={{marginLeft: '6.5vw'}}>Your smile,</Text>
        <Text style={{marginLeft: '13vw'}}>Your eyes,</Text>
        <Text style={{marginLeft: '19.5vw'}}>Your touch,</Text>
        <Text style={{marginLeft: '26vw'}}>Your humor,</Text>
        <Text style={{marginLeft: '32.5vw'}}>How dependable you are,</Text>
        <Text style={{marginLeft: '39vw'}}>Your desire to try new things,</Text>
        <TextRight>and how you always strive to be a better version of yourself.</TextRight>
    </Container>
  )
}

export default PageTen
import React from 'react';
import styled from 'styled-components';

const CubeLoader = () => {
  return (
    <StyledWrapper>
      <div className="cube">
        <div className="face front" />
        <div className="face back" />
        <div className="face right" />
        <div className="face left" />
        <div className="face top" />
        <div className="face bottom" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cube {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    position: relative;
    transform-style: preserve-3d;
    animation: spin 3s infinite cubic-bezier(0.16, 0.61, 0.49, 0.91);
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #06b6d4;
    border: 2px solid rgba(6, 182, 212, 0.3);
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
  }

  .top {
    transform: rotateX(90deg) translateZ(30px);
    animation: shift-top 3s infinite ease-out;
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(30px);
    animation: shift-bottom 3s infinite ease-out;
  }

  .right {
    transform: rotateY(90deg) translateZ(30px);
    animation: shift-right 3s infinite ease-out;
  }

  .left {
    transform: rotateY(-90deg) translateZ(30px);
    animation: shift-left 3s infinite ease-out;
  }

  .front {
    transform: translateZ(30px);
    animation: shift-front 3s infinite ease-out;
  }

  .back {
    transform: rotateY(-180deg) translateZ(30px);
    animation: shift-back 3s infinite ease-out;
  }

  @keyframes spin {
    33% {
      transform: rotateX(-36deg) rotateY(-405deg);
    }

    100% {
      transform: rotateX(-36deg) rotateY(-405deg);
    }
  }

  @keyframes shift-top {
    33% {
      transform: rotateX(90deg) translateZ(30px);
    }

    50% {
      transform: rotateX(90deg) translateZ(60px);
    }

    60% {
      transform: rotateX(90deg) translateZ(60px);
    }

    75% {
      transform: rotateX(90deg) translateZ(30px);
    }
  }

  @keyframes shift-bottom {
    33% {
      transform: rotateX(-90deg) translateZ(30px);
    }

    50% {
      transform: rotateX(-90deg) translateZ(60px);
    }

    60% {
      transform: rotateX(-90deg) translateZ(60px);
    }

    75% {
      transform: rotateX(-90deg) translateZ(30px);
    }
  }

  @keyframes shift-right {
    33% {
      transform: rotateY(90deg) translateZ(30px);
    }

    50% {
      transform: rotateY(90deg) translateZ(60px);
    }

    60% {
      transform: rotateY(90deg) translateZ(60px);
    }

    75% {
      transform: rotateY(90deg) translateZ(30px);
    }
  }

  @keyframes shift-left {
    33% {
      transform: rotateY(-90deg) translateZ(30px);
    }

    50% {
      transform: rotateY(-90deg) translateZ(60px);
    }

    60% {
      transform: rotateY(-90deg) translateZ(60px);
    }

    75% {
      transform: rotateY(-90deg) translateZ(30px);
    }
  }

  @keyframes shift-front {
    33% {
      transform: translateZ(30px);
    }

    50% {
      transform: translateZ(60px);
    }

    60% {
      transform: translateZ(60px);
    }

    75% {
      transform: translateZ(30px);
    }
  }

  @keyframes shift-back {
    33% {
      transform: rotateY(-180deg) translateZ(30px);
    }

    50% {
      transform: rotateY(-180deg) translateZ(60px);
    }

    60% {
      transform: rotateY(-180deg) translateZ(60px);
    }

    75% {
      transform: rotateY(-180deg) translateZ(30px);
    }
  }
`;

export default CubeLoader;
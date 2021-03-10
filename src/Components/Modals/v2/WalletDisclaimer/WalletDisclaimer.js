import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../../Modal';
import steps from './steps';
import { useHistory } from 'react-router-dom';

const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

const PictureTag = styled.picture``;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
  width: 100%;
`;

const Button = styled.div`
  cursor: pointer;
  display: block;
  width: 100%;
  background: #30bf70;
  border-radius: 6px;

  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
  padding-top: 16px;
  padding-bottom: 16px;

  text-decoration: none;
  margin-bottom: 16px;
`;

const Info = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #7a7f95;
  a {
    color: #31c77a;
    text-decoration: none;
  }
`;

const ImagePreload = styled.div`
  display: none;
`;

const setToString = (set) => {
  const s = [];
  for (const n in set) {
    s.push(n !== '1x' ? set[n] + ' ' + n : set[n]);
  }
  return s.join(', ');
};

function Link(props) {
  const { to, before, children } = props;
  const history = useHistory();

  function handeClick(e) {
    e.preventDefault();

    if (before) {
      before();
    }

    history.push(to);
  }

  return (
    <a href={to} onClick={handeClick}>
      {children}
    </a>
  );
}

const DotsWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const DotsItem = styled.div`
  width: 8px;
  height: 8px;
  margin: 6px;
  border-radius: 50%;
  background: ${(props) =>
    props.active === 'true' ? '#31C77A' : 'rgba(255, 255, 255, 0.1)'};
`;

function Dots({ step }) {
  return (
    <DotsWrapper>
      {steps.map((_, index) => (
        <DotsItem
          key={'wallet-dots:' + index}
          active={(index === step).toString()}
        />
      ))}
    </DotsWrapper>
  );
}

function Picture({ image, ...props }) {
  return (
    <PictureTag {...props}>
      {Object.keys(image).map((type, index) => (
        <source
          key={`image:${type}:${index}`}
          srcSet={setToString(image[type])}
          type={type}
        />
      ))}
      <Image src={image['image/png']['1x']} alt='' role='presentation' />
    </PictureTag>
  );
}

function WalletDisclaimer({ open, close }) {
  const [step, setStep] = useState(0);
  const { image, title, description } = steps[step];

  useEffect(() => {
    if (open === true && step !== 0) {
      setStep(0);
    }
  }, [open]);

  function handleNext() {
    setStep((step) => step + 1);
  }
  return (
    <Modal open={open} close={close} name='wallet-disclaimer-modal'>
      <ImagePreload>
        {steps.map(({ image }, index) => (
          <Picture key={`wallet-preload:${index}`} image={image} />
        ))}
      </ImagePreload>
      <ImageWrapper>
        <Picture image={image} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {step !== steps.length - 1 ? (
        <>
          <Button onClick={handleNext}>Next</Button>
          <Dots step={step} />
        </>
      ) : (
        <>
          <Button as='a' href={window.modalWalletLink} data-test='letmein-btn'>
            Let me in
          </Button>
          <Info>
            By clicking “LET ME IN” button you are agreeing to the{' '}
            <Link to='/terms' before={close}>
              Terms and Conditions
            </Link>{' '}
            and understand that Trustbet.io is a non-custodial casino and{' '}
            <Link to='/howtoplay' before={close}>
              procedures involved
            </Link>
            .
          </Info>
        </>
      )}
    </Modal>
  );
}

export default WalletDisclaimer;

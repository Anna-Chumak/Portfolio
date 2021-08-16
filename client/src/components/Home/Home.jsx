import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";
import { introText } from "../../utilities/data";

const StyledHome = styled.section`
  background-color: rgb(68, 117, 117);
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24pt;
  padding: 0 50px;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80%;
  min-width: 80%;
`;

const textStyle = {
  color: "white",
};

export default function Home() {
  function renderTypeWriter() {
    let delay = 0;
    return introText.map((sentence, index) => {
      delay += 1550;
      return (
        <TypeWriterEffect
          key={index}
          textStyle={textStyle}
          startDelay={delay}
          cursorColor="white"
          text={sentence}
          typeSpeed={50}
          hideCursorAfterText={!(index === introText.length - 1)}
        />
      );
    });
  }

  return (
    <StyledHome>
      <StyledWrapper>{renderTypeWriter()}</StyledWrapper>
    </StyledHome>
  );
}

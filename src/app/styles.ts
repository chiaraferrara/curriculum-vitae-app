import styled from "@emotion/styled";
export const Container = styled.div`
  .title {
    text-align: center;
    font-size: 54px;
    margin-bottom: 60px;
    padding: 3em 0;
    border-bottom: 1px solid #e4eaec;
    p {
      font-size: 24px;
      max-width: 400px;
    }
  }
`;

export const TimelineList = styled.ul`
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const TimelineItem = styled.li`
  padding-left: 40px;
  position: relative;
`;

export const TimelineInfo = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 0.5em 0;
  text-transform: uppercase;
  ##000000-space: nowrap;
`;

export const TimelineMarker = styled.div<{ primaryColor?: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
  &:before {
    background: ${(props) => props.primaryColor || "#313233"};
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: -2px;
    width: 15px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  &:after {
    content: "";
    width: 3px;
    background: #262527;
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 6px;
  }
  .timeline-item:last-child & {
    &:after {
      content: none;
    }
  }
`;

export const TimelineContent = styled.div`
  padding-bottom: 40px;
  p:last-child {
    margin-bottom: 0;
  }
`;

export const MainHeading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const SchoolContainer = styled.div`
  background: ##000000;
  color: #000;
  padding: 20px;
  border-radius: 2em;
  margin-bottom: 20px;
  border: 2px solid #000000;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #383636;
    color: #ffffff;
    cursor: progress;

    div {
      background: #ffffff;
      color: #000000;
    }
  }
`;

export const SchoolHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const YearHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Degree = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0;
`;

export const Skills = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

export const Wrapper = styled.div`
  width: max(70%);
  margin: 0 auto;
`;

export const Skill = styled.div`
  margin-bottom: 35px;
  position: relative;
  overflow-x: hidden;
`;

export const SkillP = styled.p`
  font-size: 12x;
  font-weight: 700;
  color: #262527;
  margin: 0 0 0px 0;
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 3px;
  background: #dccad6;
  position: relative;

  span {
    position: absolute;
    right: 10px;
    top: -30px;
    font-size: 18px;
    padding: 3px 0;
    font-weight: 500;
    color: #383636;
  }
`;

export const Bar = styled.div`
  height: 100%;
  background: #2f3031;
  position: relative;
`;

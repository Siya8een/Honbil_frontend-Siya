import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const RentalCards = styled.div`
  display: flex;
  width: 80vw;
  height: 40vw;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #f4f4f4;
  border: 2px solid #ccc;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const CardImage = styled.div`
  height: 156px;
  margin-right: 2rem;

  a:hover {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
`;

export const Tags = styled.div`
  text-align: left;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 1px;
  border-radius: 0.2rem;
  background-color: greenyellow;
  width: fit-content;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 0.5rem;
  width: 40vw;
  height: 10vw;
  display: flex;
  justify-content: space-between;
`;

export const Button28 = styled.button`
  appearance: none;
  margin: 0 2.5rem;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 10px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 30px;
  min-width: 0;
  outline: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 70%;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

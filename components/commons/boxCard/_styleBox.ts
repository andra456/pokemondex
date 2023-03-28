import { css } from "emotion";

export const container = css`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  background: #eee;
  border-radius: 15px;
  padding: 10px;

  .pokemonName {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0.5px 0.5px 1.5px grey;
  }
  .number {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  ul {
    list-style: none;
    margin-top: 5px;
    > li {
      display: inline-block;
      background: #45abff;
      padding: 5px 10px;
      margin-left: 5px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      text-shadow: 0.5px 0.5px 1.5px grey;
    }
  }
`;

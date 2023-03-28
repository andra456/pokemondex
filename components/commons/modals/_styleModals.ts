import { css } from "emotion";

export const wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .box {
    position: relative;
    width: 100%;
    max-width: 600px;
  }

  .container {
    background: #fff;
    display: grid;
    width: 100%;
    grid-template-columns: 50% auto;
    text-align: center;
    gap: 20px;
    border-radius: 10px;
    ul {
      list-style: none;
      > li {
        display: inline-block;
        background: #eee;
        padding: 5px 10px;
        margin-left: 5px;
        border-radius: 5px;
      }
    }

    .ability {
      margin-top: 10px;
      ul li {
        width: 100%;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 10px;
      }
    }

    .type p {
      margin-bottom: 10px;
    }

    .overview {
      padding: 30px;
      background: #16abff;
      p {
        text-shadow: 0.5px 0.5px 1.5px #000;
        color: #fff;
        font-weight: 700;
      }
      .pokemonName {
        font-size: 28px;
      }
    }

    .baseState {
      padding: 30px;
      > p {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #45abff;
      }

      .progress {
        text-align: left;
        > .status {
          background: #dfdfdf;
          display: block;
          height: 12px;
          border-radius: 5px;
          margin: 5px 0;
          position: relative;
          overflow: hidden;
        }
        > .status > span {
          position: absolute;
          background: #1bd24e;
          left: 0;
          height: 12px;
          top: 0;
        }
        > p {
          font-weight: 500;
        }
      }
    }
  }
`;

export const blurs = css`
  backdrop-filter: blur(8px);
  filter: blur(5px);
`;

export const unBlurs = css`
  backdrop-filter: blur(0px);
  filter: blur(0px);
`;

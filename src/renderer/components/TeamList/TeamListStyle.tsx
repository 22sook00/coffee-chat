import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyleSectionContainer = styled.section`
  padding: 30px;
  background: rgb(254, 250, 255);
  border-radius: 8px;
  box-sizing: border-box;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`;

export const StyleTitleWrapper = styled.div`
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  > h1 {
    margin: 0;
  }
  > p {
    font-size: 14px;
  }
`;
export const StyleFormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  height: 50px;
`;

export const StyleInputTeam = styled.input`
  margin-right: 10px;
  padding: 10px;
  font-size: 22px;
  border-radius: 8px;
  border: 1px dashed #d36990;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.09);
`;

export const StyleAddBtn = styled.button`
  font-size: 18px;
`;
export const StyleTeamsWrapper = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;

export const StyleTeamNames = styled.ul`
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 5px;
  font-size: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  box-sizing: border-box;
  > button {
    font-size: 12px;
    font-weight: 400;
    padding: 0 10px;
  }
  &:hover {
    transition: all 0.3s;
    color: rgb(24, 24, 24);
  }
`;
export const StyleH3Ttl = styled.h3`
  text-align: right;
  margin-right: 10px;
`;
export const StyleSendBtn = styled.button`
  width: 100%;
  font-weight: 500;
  color: #fff;
  border: none;
  background: linear-gradient(
    200.96deg,
    #2ac2fe -29.09%,
    #d36990 51.77%,
    #a13ecf 129.35%
  );
`;

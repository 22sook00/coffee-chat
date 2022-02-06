/* eslint-disable react/no-array-index-key */
import React, { FC, SetStateAction } from 'react';
import EmptyScreen from '../EmptyScreen/EmptyTeamList';
import {
  StyleAddBtn,
  StyleFormWrapper,
  StyleH3Ttl,
  StyleInputTeam,
  StyleSectionContainer,
  StyleSendBtn,
  StyleTeamNames,
  StyleTeamsWrapper,
  StyleTitleWrapper,
} from './TeamListStyle';

interface Props {
  teamList: Array<string>;
  teamName: string;
  setTeamName: React.Dispatch<SetStateAction<string>>;
  setTeamList: React.Dispatch<SetStateAction<Array<string>>>;
  handleClickSend: () => void;
}

const TeamList: FC<Props> = ({
  teamList,
  teamName,
  setTeamName,
  setTeamList,
  handleClickSend,
}) => {
  const onChangeTeamName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleSubmitList = (e: React.FormEvent) => {
    e.preventDefault();
    setTeamList([...teamList, teamName]);
    setTeamName('');
  };

  const handleDeleteName = (idx: number) => {
    const filtering = teamList.filter((name: string) => {
      return name !== teamList[idx];
    });
    setTeamList(filtering);
  };

  return (
    <StyleSectionContainer>
      <StyleTitleWrapper>
        <h1>☕️ Random Coffee Chat</h1>
        <p>매주 월요일 돌아오는 랜덤커피 조 편성 :)</p>
      </StyleTitleWrapper>
      <StyleFormWrapper onSubmit={handleSubmitList}>
        <StyleInputTeam
          type="text"
          placeholder="Enter Team Name"
          onChange={onChangeTeamName}
          value={teamName}
        />
        <StyleAddBtn type="submit">ADD</StyleAddBtn>
      </StyleFormWrapper>

      {teamList.length === 0 ? (
        <EmptyScreen />
      ) : (
        <StyleTeamsWrapper>
          {teamList.map((name: string, idx: number) => {
            return (
              <StyleTeamNames key={idx}>
                <li>{name}</li>
                <button type="button" onClick={() => handleDeleteName(idx)}>
                  삭제
                </button>
              </StyleTeamNames>
            );
          })}
        </StyleTeamsWrapper>
      )}

      <StyleH3Ttl>총 {teamList.length} 명</StyleH3Ttl>
      <StyleSendBtn onClick={handleClickSend} type="button">
        생성하기
      </StyleSendBtn>
    </StyleSectionContainer>
  );
};

export default TeamList;

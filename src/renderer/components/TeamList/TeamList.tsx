/* eslint-disable react/no-array-index-key */
import React, { FC, SetStateAction } from 'react';
import EmptyScreen from '../EmptyScreen/EmptyTeamList';

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
    <section className="section_container list-section">
      <div className="title_wrapper">
        <h1>☕️ Random Coffee Chat</h1>
        <p>매주 월요일 돌아오는 랜덤커피 조 편성 :)</p>
      </div>
      <form className="input_wrapper" onSubmit={handleSubmitList}>
        <input
          className="team_input"
          type="text"
          placeholder="Enter Team Name"
          onChange={onChangeTeamName}
          value={teamName}
        />
        <button className="team_input_btn" type="submit">
          ADD
        </button>
      </form>

      {teamList.length === 0 ? (
        <EmptyScreen />
      ) : (
        <div className="teams_wrapper">
          {teamList.map((name: string, idx: number) => {
            return (
              <ul key={idx} className="team_names">
                <li>{name}</li>
                <button type="button" onClick={() => handleDeleteName(idx)}>
                  삭제
                </button>
              </ul>
            );
          })}
        </div>
      )}

      <h3 className="ttl_team_h3">총 {teamList.length} 명</h3>
      <button onClick={handleClickSend} className="send_button" type="button">
        생성하기
      </button>
    </section>
  );
};

export default TeamList;

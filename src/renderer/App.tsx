import React, { useState } from 'react';
import './App.css';
import TeamList from './components/TeamList/TeamList';
import TeamResult from './components/TeamResult/TeamResult';

const App = () => {
  const [teamName, setTeamName] = useState<string>('');
  const [teamList, setTeamList] = useState<Array<string>>([]);
  const [randomTeam, setRandomTeam] = useState<Array<string>>([]);

  const handleClickSend = () => {
    setRandomTeam(teamList);
  };

  return (
    <main>
      <TeamList
        teamList={teamList}
        teamName={teamName}
        setTeamName={setTeamName}
        setTeamList={setTeamList}
        handleClickSend={handleClickSend}
      />
      <TeamResult randomTeam={randomTeam} />
    </main>
  );
};

export default App;

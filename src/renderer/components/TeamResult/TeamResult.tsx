/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import {
  FC,
  ReactChild,
  ReactFragment,
  ReactPortal,
  SetStateAction,
  useState,
} from 'react';
import { StyleSectionContainer, StyleTeamFinalList } from './TeamResult.Style';

interface Props {
  randomTeam: Array<string>;
}

const TeamResult: FC<Props> = ({ randomTeam }) => {
  const [resultTeam, setResultTeam] = useState<any>([]);
  const newArr: any[] = [];
  for (let i = 0; i < randomTeam.length; i++) {
    const selectedRandom = randomTeam.splice(0, 4);
    newArr.push(selectedRandom);
    setResultTeam(newArr);
  }

  return (
    <StyleSectionContainer>
      {resultTeam.map(
        (
          el:
            | boolean
            | ReactChild
            | ReactFragment
            | ReactPortal
            | null
            | undefined,
          idx: number
        ) => {
          return <StyleTeamFinalList key={idx}>{el}</StyleTeamFinalList>;
        }
      )}
    </StyleSectionContainer>
  );
};

export default TeamResult;

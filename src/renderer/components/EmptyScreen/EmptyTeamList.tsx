import { StyledEmptySection } from './EmptyScreenStyle';

const EmptyScreen = () => {
  return (
    <StyledEmptySection>
      <div className="emplty_alert_div">
        <h1>☕️ 추가된 팀원이 없습니다. ☕️</h1>
      </div>
    </StyledEmptySection>
  );
};

export default EmptyScreen;

import StageCardStyled from "@/components/StageCard/StageCardStyled";
import arrow from "@/images/arrow.png";

function StageCard({ className, haveArrow, stage, title, description }) {
  return (
    <StageCardStyled className={className}>
      {haveArrow && (
        <div className="arrow">
          <img src={arrow} alt="next step" />
        </div>
      )}
      <div className="textBox">
        <h3>{stage}</h3>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </StageCardStyled>
  );
}

export default StageCard;

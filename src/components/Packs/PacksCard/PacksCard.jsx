import PacksCardStyled from "./PacksCardStyled";

function PacksCard({ number, text, width }) {
  return (
    <PacksCardStyled width={width}>
      <p className="number">{number}</p>
      <p className="text">{text}</p>
      <div>
        <img src="" alt="" />
      </div>
    </PacksCardStyled>
  );
}

export default PacksCard;

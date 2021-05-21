import HubsCardStyled from "./HubsCardStyled";

function HubsCard({ image, imgDescr, text }) {
  return (
    <HubsCardStyled>
      <img src={image} alt={imgDescr} />
      <p> {text} </p>
    </HubsCardStyled>
  );
}

export default HubsCard;

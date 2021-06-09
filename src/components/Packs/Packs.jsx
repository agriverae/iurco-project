import PacksStyled from "./PacksStyled";
import PacksCard from "./PacksCard";

function Packs() {
  return (
    <PacksStyled>
      <div className="title">
        <h2>Packs mensuales</h2>
      </div>
      <div className="cards">
        <PacksCard number=".01" text="USABILITY TESTING" width="min-content" />
        <PacksCard
          number=".02"
          text="SEARCH ENGINE OPTIMIZATION"
          width="180px"
        />
        <PacksCard number=".03" text="SECURITY TEST" width="min-content" />
        <PacksCard
          number=".04"
          text="PLATFORM PERFORMANCE AUDITING"
          width="min-content"
        />
        <PacksCard
          number=".05"
          text="AUTOMATED QUALITY ASSURANCE"
          width="min-content"
        />
        <PacksCard
          number=".06"
          text="BACKEND ADMINISTRATOR"
          width="min-content"
        />
        <PacksCard number=".07" text="SUPPORT & DELIVERY" width="142px" />
      </div>
    </PacksStyled>
  );
}

export default Packs;

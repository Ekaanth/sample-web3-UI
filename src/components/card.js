import "./card.css";

export function Card(props) {
  const { name, currentPrice, dailyChange, tlv, popularPairs, imageName } =
    props.asset;
  return (
    <>
      <div className="card">
        <div className="icon">
          <div className={`icon-container ${imageName}`}>
            <img src={`assets/${imageName}.png`} alt={name} />
          </div>
        </div>
        <div className="content">
          <div className="label">
            <span>{name}</span>
          </div>
          <div className="price">
            <span>${currentPrice}</span> &nbsp; &nbsp;
            <span className={dailyChange >= 0 ? "green" : "red"}>
              {dailyChange}%
            </span>
          </div>
          <div className="label padding-top">
            <span>Price</span>
          </div>
          <div className="tlv">
            <span>${tlv}</span>
          </div>
          <div className="label padding-top">
            <span>TLV</span>
          </div>

          <div className="pairs">
            {popularPairs.map((pair, index) => (
              <img
                key={index}
                src={`/assets/${pair}.png`}
                width="22"
                height="22"
                alt={pair}
              />
            ))}
          </div>
          <div className="label padding-top">
            <span>Popular pairs</span>
          </div>
        </div>
      </div>
    </>
  );
}

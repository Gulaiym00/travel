import scss from "./region.module.scss";
import { regions } from "@/utils/region";
const Region = () => {
  return (
    <div className={scss.region}>
      <div className="container">
        <div className={scss.mainRegion}>
          {regions.map((region) => (
            <div key={region.title} className={scss.regionCard}>
              <div className={scss.regionTitle}>
                <h1>{region.title}</h1>
                <p>{region.description}</p>
              </div>
              <img src={region.image} alt={region.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Region;

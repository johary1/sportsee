import { IS_MOCKED } from "../../config";
import "./DataSource.css";

/**
 * a component that indicates user of the data source: API or mocked Data.
 */
function DataSource() {
  return IS_MOCKED ? (
    <div className="dataSourceContainer">
      <small>Données mockées</small>
    </div>
  ) : (
    <div className="dataSourceContainer">
      <small>Données API</small>
    </div>
  );
}

export default DataSource;

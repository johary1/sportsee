import iconMeditation from "../../assets/iconMeditation.svg";
import iconBike from "../../assets/iconBike.svg";
import iconSwiming from "../../assets/iconSwiming.svg";
import iconDumbBell from "../../assets/iconDumbBell.svg";
import "./SideBar.css";

/**
 *
 * @returns The aside element representing the SideBar component.
 */
function SideBar() {
  return (
    <aside className="sidebarContainer">
      <div className="sidebarIcons">
        <img src={iconMeditation} alt="icon Meditation" />
        <img src={iconSwiming} alt="icon Swiming" />
        <img src={iconBike} alt="icon Bike" />
        <img src={iconDumbBell} alt="icon DumbBell" />
      </div>
      <div className="sidebarRights">Copyright, SportSee 2020</div>
    </aside>
  );
}

export default SideBar;

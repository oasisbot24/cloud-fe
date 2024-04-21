import { useState } from "react";
import Panel from "./Panel";
import PanelMenu from "./PanelMenu";

export default function CustomPanel() {
  const [anchorEl, setAnchorEl] = useState(false);

  return (
    <div>
      <Panel setAnchorEl={setAnchorEl} />
      {/* <PanelMenu setAnchorEl={setAnchorEl} anchorEl={anchorEl} /> */}
    </div>
  );
}

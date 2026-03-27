import { useState, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "/vn-topo.json";

// Region color mapping (north = lighter green, south = darker green)
const regionColors = {
  Northeast: "#8BC34A",
  "Ðông Bắc": "#8BC34A",
  Northwest: "#9CCC65",
  "Red River Delta": "#AED581",
  "North Central Region": "#66BB6A",
  "South Central Coast": "#4CAF50",
  "Tây Nguyên": "#43A047",
  Southeast: "#388E3C",
  "Mekong Delta": "#2E7D32",
};

// Alpha NDT actual project locations & partners only
const markers = [
  { name: "Hà Nội", coordinates: [105.872, 21.1306], projects: "Office & Projects" },
  { name: "Hải Phòng", coordinates: [106.635, 20.79], projects: "Đình Vũ LPG Project" },
  { name: "Thái Bình", coordinates: [106.371, 20.5303], projects: "Hàm Rồng Pipeline" },
  { name: "Quảng Ninh", coordinates: [107.181, 21.223], projects: "Mong Dương Power Plant" },
  { name: "Thanh Hóa", coordinates: [105.215, 20.0917], projects: "Nghi Sơn Refinery" },
  { name: "Nghệ An", coordinates: [104.827, 19.3548], projects: "Industrial Projects" },
  { name: "Đà Nẵng", coordinates: [108.102, 16.0912], projects: "Central Region Office" },
  { name: "Quảng Ngãi", coordinates: [108.686, 14.9971], projects: "Dung Quất Refinery & Shipyard" },
  { name: "Bình Định", coordinates: [108.971, 14.1075], projects: "PTSC Fabrication" },
  { name: "Khánh Hòa", coordinates: [109.359, 12.6049], projects: "Offshore Support Base" },
  { name: "TP.HCM", coordinates: [106.926, 10.409], projects: "Headquarters" },
  { name: "Vũng Tàu", coordinates: [107.143, 10.3969], projects: "HQ & Major Fabrication Yards" },
  { name: "Phú Mỹ", coordinates: [107.05, 10.55], projects: "Phú Mỹ Power Plant" },
  { name: "Cần Thơ", coordinates: [105.685, 10.2421], projects: "Cần Thơ Bridge" },
  { name: "Cà Mau", coordinates: [105.073, 9.05545], projects: "Gas Processing & Fertilizer Plant" },
];

function VietnamMap() {
  const [tooltip, setTooltip] = useState(null);

  return (
    <div className="relative w-[280px] md:w-[360px] lg:w-[400px]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 2200,
          center: [107.5, 16.0],
        }}
        width={400}
        height={700}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup center={[107.5, 16.0]} zoom={1} disablePanning disableZooming>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const region = geo.properties.region || "";
                const fillColor = regionColors[region] || "#4CAF50";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#fff"
                    strokeWidth={0.8}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#81C784", outline: "none", cursor: "pointer" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Location markers */}
          {markers.map((marker, i) => (
            <Marker
              key={i}
              coordinates={marker.coordinates}
              onMouseEnter={() => setTooltip(marker)}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* Pulse ring */}
              <circle r={6} fill="#ef4444" opacity={0.2}>
                <animate
                  attributeName="r"
                  values="4;8;4"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${i * 0.1}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${i * 0.1}s`}
                />
              </circle>
              {/* Pin */}
              <circle r={3.5} fill="#ef4444" stroke="#fff" strokeWidth={1.5} className="cursor-pointer" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Hoàng Sa & Trường Sa labels */}
      <div className="absolute right-0 top-[38%] text-green-700 text-[10px] font-semibold leading-tight">
        QUẦN ĐẢO<br />HOÀNG SA
      </div>
      <div className="absolute right-0 bottom-[18%] text-green-700 text-[10px] font-semibold leading-tight">
        QUẦN ĐẢO<br />TRƯỜNG SA
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div className="absolute top-4 left-4 bg-white border border-slate-200 rounded-lg px-4 py-2.5 shadow-lg z-20 pointer-events-none">
          <p className="text-green-700 font-bold text-sm">{tooltip.name}</p>
          <p className="text-slate-500 text-xs">{tooltip.projects}</p>
        </div>
      )}
    </div>
  );
}

export default memo(VietnamMap);

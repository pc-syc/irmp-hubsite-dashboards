window.addEventListener('DOMContentLoaded', () => {
  const items = [
    { angleDeg: 11.5, label: "Bison Counts", link: "https://apca.maps.arcgis.com/apps/dashboards/f0e11127de404d98a384d398c89bd9cb" },
    { angleDeg: 34, label: "Muskrat House Counts", link: "https://apca.maps.arcgis.com/apps/dashboards/50e343012d094b2895cd6205e929d1bb" },
    { angleDeg: 56.5, label: "Breeding Waterfowl Counts", link: "https://www.arcgis.com/apps/dashboards/c3dde2e77d0a402fa28407f218530275" },
    { angleDeg: 79, label: "Surface Water Area", link: "https://www.arcgis.com/apps/dashboards/0c7c8218200f4970acdc744b23b48109" },
    { angleDeg: 101.5, label: "Plant Growing Season", link: "https://apca.maps.arcgis.com/apps/dashboards/f3e230c889e146e895542932c5153b99" },
    { angleDeg: 123.5, label: "Shrub Cover", link: "https://www.arcgis.com/apps/dashboards/c4aa379ef7b64384abf7b335cda6c89b" },

    { angleDeg: 146.5, label: "Muskrat Quality & Health" },
    { angleDeg: 169, label: "Air Quality", link: "https://www.arcgis.com/apps/dashboards/958cc412607c49d08169e7998af4a340" },
    { angleDeg: 191.5, label: "River Water Quality", link: "https://www.arcgis.com/apps/dashboards/10be9736c9f84297b7f7b2db7963f0f5" },
    { angleDeg: 214, label: "Waterbird Egg Contaminants", link: "https://apca.maps.arcgis.com/apps/dashboards/4d5df48bbd494a67846d90fe8954b7cf" },
    { angleDeg: 236.5, label: "Snow Contaminants", link: "https://apca.maps.arcgis.com/apps/dashboards/b2d78a7378a04318808c3c940e373dc3" },
    { angleDeg: 258.5, label: "Fish Quality & Health",link: "https://apca.maps.arcgis.com/apps/dashboards/9122ce68c1c94218bf203bc45f3b05a1" },
    
    { angleDeg: 281.5, label: "Ice & Winter Travel", link: "https://www.arcgis.com/apps/dashboards/c6399a3e216047c9a46adb0e95d433c3" },
    { angleDeg: 304, label: "Lake Level", link: "https://apca.maps.arcgis.com/apps/dashboards/33d173483dba4f6e9d60bd2b65c498c8" },
    { angleDeg: 326.5, label: "River Flow", link: "https://www.arcgis.com/apps/dashboards/4bc3bcde4d5146d6882317c17bf6992b" },
    { angleDeg: 348.5, label: "Navigation", link: "https://www.arcgis.com/apps/dashboards/71317a760f0b4bf5a8962feb150a0547" },
  ];

  const circleMenu = document.getElementById("circleMenu");
  const centerX = circleMenu.offsetWidth / 2;
  const centerY = circleMenu.offsetHeight / 2;
  const radius = 325;

  items.forEach(({ angleDeg, label, link }) => {
    const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start from top
    const x = centerX + radius * Math.cos(angleRad) - 55;
    const y = centerY + radius * Math.sin(angleRad) - 55;

    const el = link ? document.createElement("a") : document.createElement("div");
    el.className = "menu-item";
    el.textContent = label;

    if (link) {
      el.href = link;
      el.target = "_blank";
    }

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    circleMenu.appendChild(el);
  });
});

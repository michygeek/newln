// Copies a curated subset of the extracted PDF photos into descriptively
// named files under public/images/site/ so the app can reference clean,
// stable paths instead of cryptic pdf.js object names.
import fs from "fs";
import path from "path";

const src = path.resolve("public/images/extracted");
const dest = path.resolve("public/images/site");
fs.mkdirSync(dest, { recursive: true });

// [destination filename, source extracted filename]
const mapping = [
  ["road-streetlights.png", "page02-img_p1_1.png"],
  ["borehole-drilling-rig.png", "page04-img_p3_1.png"],
  ["dump-truck-yellow.png", "page04-img_p3_2.png"],
  ["bulldozer-operator-1.png", "page05-img_p4_1.png"],
  ["dump-truck-convoy.png", "page05-img_p4_2.png"],
  ["elevated-water-tank.png", "page05-img_p4_3.png"],
  ["building-construction-1.png", "page07-img_p6_1.png"],
  ["building-facade.png", "page07-img_p6_3.png"],
  ["earthworks-hillside.png", "page09-img_p8_1.png"],
  ["drainage-trench-workers.png", "page09-img_p8_3.png"],
  ["piling-rig-delmag.png", "page09-img_p8_5.png"],
  ["road-civil-works.png", "page10-img_p9_1.png"],
  ["road-roller-compaction-1.png", "page12-img_p11_2.png"],
  ["culvert-formwork.png", "page12-img_p11_4.png"],
  ["concrete-pipe-casting.png", "page17-img_p16_2.png"],
  ["bitumen-spray-truck.png", "page18-img_p17_2.png"],
  ["dump-truck-road.png", "page18-img_p17_4.png"],
  ["pile-driver-excavator.png", "page18-img_p17_5.png"],
  ["foundation-trench-rebar.png", "page19-img_p18_1.png"],
  ["foundation-excavation-workers.png", "page19-img_p18_2.png"],
  ["wheel-loader.png", "page21-img_p20_3.png"],
  ["road-roller-compaction-2.png", "page22-img_p21_3.png"],
  ["piling-rig-excavator.png", "page23-img_p22_3.png"],
  ["drilling-rig-workers.png", "page24-img_p23_1.png"],
  ["sheet-pile-wall.png", "page25-img_p24_1.png"],
  ["crane-construction-site.png", "page25-img_p24_2.png"],
  ["drilling-rig-tall.png", "page25-img_p24_5.png"],
  ["site-street-view.png", "page25-img_p24_14.png"],
  ["rebar-mats-construction.png", "page26-img_p25_1.png"],
  ["bulldozer-operator-2.png", "page26-img_p25_2.png"],
  // Generic equipment / technology illustrations (used for Services page,
  // not presented as specific Newline West Africa project case studies)
  ["equip-transformer-factory.png", "page16-img_p15_1.png"],
  ["equip-transformer-install.png", "page15-img_p14_2.png"],
  ["equip-solar-water-heater-diagram.png", "page15-img_p14_1.png"],
  ["equip-transformer-porcelain.png", "page19-img_p18_3.png"],
  ["equip-solar-panel-array.png", "page21-img_p20_1.png"],
  ["equip-solar-street-light.png", "page22-img_p21_2.png"],
  ["equip-transformer-catalog.png", "page24-img_p23_2.png"],
];

let copied = 0;
for (const [destName, srcName] of mapping) {
  const srcPath = path.join(src, srcName);
  if (!fs.existsSync(srcPath)) {
    console.warn(`Missing source: ${srcName}`);
    continue;
  }
  fs.copyFileSync(srcPath, path.join(dest, destName));
  copied++;
}

console.log(`Copied ${copied}/${mapping.length} curated images to ${dest}`);

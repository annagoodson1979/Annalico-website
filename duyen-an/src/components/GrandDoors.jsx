import { motion, useTransform } from "framer-motion";
import { appear } from "../motionRanges";

function DoorWomen({ progress, beats }) {
  const opacity = appear(progress, beats.womenDoors[0], beats.womenDoors[1]);
  const y = useTransform(progress, beats.womenDoors, [24, 0]);

  return (
    <>
      <motion.div style={{ opacity, y }} className="woman woman-left">
        <HostWoman />
      </motion.div>
      <motion.div style={{ opacity, y }} className="woman woman-right">
        <HostWoman alternate />
      </motion.div>
    </>
  );
}

function GrandDoorOpen({ progress, beats }) {
  const leftDoorX = useTransform(progress, beats.grandDoors, ["0%", "-48%"]);
  const rightDoorX = useTransform(progress, beats.grandDoors, ["0%", "48%"]);

  return (
    <>
      <motion.div style={{ x: leftDoorX }} className="entry-door entry-door-left">
        <div className="door-pull door-pull-left" />
      </motion.div>
      <motion.div style={{ x: rightDoorX }} className="entry-door entry-door-right">
        <div className="door-pull door-pull-right" />
      </motion.div>
    </>
  );
}

export function CarDoorReveal({ progress, beats }) {
  const x = useTransform(progress, beats.carDoor, ["0%", "-42%"]);
  const opacity = useTransform(progress, [0, 0.22, 0.42], [1, 1, 0]);

  return <motion.div style={{ x, opacity }} className="car-door-frame" />;
}

export default function GrandDoors({ progress, beats, brandName, exteriorImage, grandDoorImage }) {
  const exteriorOpacity = useTransform(progress, beats.exterior, [0, 1]);
  const exteriorScale = useTransform(progress, [0, 1], [1.06, 1]);
  const grandDoorsPlateOpacity = useTransform(progress, [0.22, 0.42], [0, 1]);

  return (
    <motion.section style={{ opacity: exteriorOpacity }} className="scene exterior-world">
      {/* EXTERIOR IMAGE */}
      <motion.img
        src={exteriorImage}
        style={{
          opacity: exteriorOpacity,
          scale: exteriorScale,
        }}
        className="image-plate exterior-plate"
        alt=""
      />
      <div className="blossom blossom-left">{"\u273f"}</div>
      <div className="blossom blossom-right">{"\u273f"}</div>
      {[...Array(22)].map((_, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{
            duration: 5 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="falling-petal"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${(index * 23) % 80}%`,
          }}
        >
          {"\u2726"}
        </motion.div>
      ))}
      <div className="entry-wrap">
        <div className="entry-building">
          <motion.img
            src={grandDoorImage}
            style={{
              opacity: grandDoorsPlateOpacity,
            }}
            className="image-plate grand-door-plate"
            alt=""
          />
          <div className="brand-lockup">
            <div className="brand-name">{brandName}</div>
            <div className="brand-kicker">House of Yen</div>
          </div>
          <DoorWomen progress={progress} beats={beats} />
          <GrandDoorOpen progress={progress} beats={beats} />
        </div>
      </div>
    </motion.section>
  );
}

function HostWoman({ alternate = false }) {
  return (
    <div className="host-woman">
      <div className="host-woman-hair" />
      <div className={alternate ? "host-woman-dress alternate" : "host-woman-dress"} />
      <div className="host-woman-pants pant-left" />
      <div className="host-woman-pants pant-right" />
      <div className="host-woman-embroidery" />
      <div className="host-woman-hand hand-left" />
      <div className="host-woman-hand hand-right" />
    </div>
  );
}

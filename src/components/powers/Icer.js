import "./powers.css";
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer.js"
import icer from "../../image_assets/powers/icer.png"
import { motion } from "framer-motion";

export default function App() {

  const dispatch = useDispatch()
  const powersList = useSelector((state) => state.powers.value)
  const potionsList = useSelector((state) => state.potions.value)

  // Dictate the duration of freeze power depending on potion level.
  // This should be rewritten and sent to other players via Socket IO
  const icer_duration_level = () => {
    let duration = 10

    if (potionsList[4].level === 1) {duration = powersList[4].duration_level_1}
    if (potionsList[4].level === 2) {duration = powersList[4].duration_level_2}
    if (potionsList[4].level === 3) {duration = powersList[4].duration_level_3}

    return duration
  }


  setTimeout(function() {
    dispatch(dectivate_power({power_name: "FREEZE"}))
    document.getElementById("icer").style.display = "none"
  }, icer_duration_level()*1000);


  return (
    <motion.img
      src={icer}
      className="power_icer"
      id="icer"
      animate={{
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: icer_duration_level(),
        ease: "easeInOut",
        times: [0, 0.2, 0.9, 1],
      }}
    />
  );
}

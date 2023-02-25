import "./powers.css";
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer.js"
import icer from "../../image_assets/powers/icer.webp"
import { motion } from "framer-motion";


export default function MassFreeze() {

  const dispatch = useDispatch()
  const powersList = useSelector((state) => state.powers.value)

  // Dictate the duration of freeze power depending on potion level.
  // This should be rewritten and sent to other players via Socket IO
  const icer_duration_level = () => {
    let duration = 0

    if (powersList[18].attackLevel18 === 1) {duration = powersList[18].duration_level_1}
    if (powersList[18].attackLevel18 === 2) {duration = powersList[18].duration_level_2}
    if (powersList[18].attackLevel18 === 3) {duration = powersList[18].duration_level_3}


    return duration
  }


  setTimeout(function() {
    dispatch(dectivate_power({power_name: "MASS FREEZE"}))
    document.getElementById("freeze").style.display = "none"
  }, icer_duration_level()*1000);


  return (
    <motion.img
      src={icer}
      className="power_mass_freeze"
      id="freeze"
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

import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import { FADE_DROPDOWN } from "./animations/framer-animations";
import AuthContext from "./contexts/AuthContext";
import Icon from "./icons/Icon";

const UserInfo = () => {
  const auth = useContext(AuthContext);

  return (
    <motion.div
      className="user_info"
      variants={FADE_DROPDOWN}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <p>
        <Icon icon="user" /> Nombre completo
      </p>
      <p>
        <Icon icon="mail" /> {auth.email}
      </p>
      <button>Cerrar Sesión</button>
    </motion.div>
  );
};

export const Navbar = () => {
  const [userInfoHidden, setUserInfoHidden] = useState(true);

  return (
    <div className="header">
      <div className="header_logo">
        <img src="/logo.png" alt="Logo" />
        <p className="title">Evaluar Cursos</p>
      </div>
      <div className="header_user">
        <Icon
          icon="userCircle"
          size={42}
          onClick={() => setUserInfoHidden(!userInfoHidden)}
        />
      </div>
      <AnimatePresence>{userInfoHidden ? null : <UserInfo />}</AnimatePresence>
    </div>
  );
};

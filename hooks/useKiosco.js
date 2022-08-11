import { useContext } from "react";
import KioscoContext from "../context/KioscoProvider";

const useKiosco = () => {
    return useContext(KioscoContext)
}

export default useKiosco
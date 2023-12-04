import {useSelector, useDispatch} from "react-redux"
import Shadow from "./Shadow"
import {addShadow} from "../../features/shadows"

export default function ShadowList() {

  const shadows= useSelector(state => state.shadows)
  //ca va a la page Shadow.jsx
  const dispatch = useDispatch()
  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg">Customize Shadows</p>
        <button
        // ca ouvre des nouvo item kan on click sur le bouton
        onClick={()=> dispatch(addShadow())}
        className="py-1 px-3 text-sm rounded bg-blue-600 focus:outine-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 text-white"
        >Add a Shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow,index)=> (
          <Shadow
          panelNumber={index+1}
          shadow={shadow}
          key={shadow.id}
          />
        ))}
      </ul>
    </div>
  )
}

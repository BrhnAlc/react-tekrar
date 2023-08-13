import ButonStyle from "./Buton.module.css"

const Buton = ({btn}) => {
  return (
    <div className={ButonStyle.title}>
      <button className="btn-blue">{btn}</button>
    </div>
  )
}

export default Buton;
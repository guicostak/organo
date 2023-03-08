import './CampoTexto.css'

const CampoTexto = (props) => {

  const placeholderModificada = `${props.placeholder}...`

  let valor = ''

  const aoDigitado = (evento) =>{
    valor = evento.target.value
  }

  return(
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
    </div>
  )
}

export default CampoTexto
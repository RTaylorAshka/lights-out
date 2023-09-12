import './Light.css'

function Light({ on, keyVal, toggle }) {
    return (

        <td className={`light ${on ? 'is_on' : ''}`} onClick={toggle}></td>

    )
}

export default Light;


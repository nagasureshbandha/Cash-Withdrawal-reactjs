import './index.css'

const DenominationItem = props => {
  const {DenominationDetails, updateBalance} = props
  const {value} = DenominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem

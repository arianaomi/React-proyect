import React, { useState } from 'react'
//Components
import Input from '../../components/Input'
//CSS
import './CurrencyConnvert.css'

const CurrencyConverter = () => {
  const [quantityMXN, setQuantityMXN] = useState(0)
  const [quantityDLS, setQuantityDLS] = useState(0)
  const [quantityEUR, setQuantityEUR] = useState(0)

  const handleCurrencyInput = (name, value) => {
    let mxn, dls, eur

    if (name === 'quantityMXN') {
      mxn = value
      dls = mxn / 22.42
      eur = mxn / 26.01
    } else if (name === 'quantityEUR') {
      eur = value
      mxn = eur * 27.97
      dls = value / 0.84
    } else {
      dls = value
      mxn = dls * 22.42
      eur = dls * 0.84
    }
    setQuantityMXN(mxn)
    setQuantityDLS(dls)
    setQuantityEUR(eur)
  }

  return (
    <>
      <form>
        <div className='sectionInput'>
          <label>MXN</label>
          <Input
            type='number'
            name='quantityMXN'
            value={quantityMXN}
            callback={handleCurrencyInput}
          />
        </div>
        <div className='sectionInput'>
          <label>DLS</label>
          <Input
            type='number'
            name='quantityDLS'
            value={quantityDLS}
            callback={handleCurrencyInput}
          />
        </div>
        <div className='sectionInput'>
          <label>EUR</label>
          <Input
            type='number'
            name='quantityEUR'
            value={quantityEUR}
            callback={handleCurrencyInput}
          />
        </div>
      </form>
    </>
  )
}

export default CurrencyConverter

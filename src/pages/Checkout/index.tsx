import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row } from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(true)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input id="fullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="email" id="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmationEmail">Confirme o e-mail</label>
              <input type="email" id="confirmationEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <div>
            <button>
              <img src={boleto} alt="Boleto" />
              Boleto Bancário
            </button>
            <button>
              <img src={cartao} alt="Cartao" />
              Cartão de crédito
            </button>
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwnder">
                      Nome do titular do cartão
                    </label>
                    <input type="text" id="cardOwnder" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwnder">
                      CPF do titular do cartão
                    </label>
                    <input type="text" id="cpfCardOwnder" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input type="text" id="cardName" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="text" id="cardNumber" />
                  </InputGroup>
                  <InputGroup maxWIdth="123px">
                    <label htmlFor="expiresMonth">Mês do vencimento</label>
                    <input type="text" id="expiresMonth" />
                  </InputGroup>
                  <InputGroup maxWIdth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" id="expiresYear" />
                  </InputGroup>
                  <InputGroup maxWIdth="48px">
                    <label htmlFor="cardCodeSecurity">CVV</label>
                    <input type="text" id="cardCodeSecurity" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWIdth="116px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 100,00</option>
                      <option>3x de R$ 80,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout

import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWIdth?: string
  marginTop?: string
}

export const Row = styled.div<InputGroupProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWIdth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    width: 100%;
  }
`

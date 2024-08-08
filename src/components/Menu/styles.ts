import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosa};
  margin-bottom: 48px;
  position: relative;

  ${TagContainer} {
    margin-right: 6px;
  }
`

export const CardContainer = styled.div`
  padding: 8px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  display: block;
  margin-bottom: 16px;
`
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 18px;

  p {
    margin-right: 4px;
  }

  img {
    width: 21px;
    height: 21px;
    margin-bottom: 1px;
  }
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosa};
  display: block;
  margin-bottom: 16px;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

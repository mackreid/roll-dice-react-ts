import styled from 'styled-components'

const Page = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: lightgrey;
    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    gap: 20px;
`

const RollButton = styled.button`
    padding: 8px 18px;
`

const DiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`

type IDiceStyle = {
    hold: boolean
}
const Dice = styled.div<IDiceStyle>`
    border: 1px solid grey;
    padding: 18px;
    background-color: ${ p => p.hold ? 'red' : 'none' };
    color: ${ p => p.hold ? 'white' : 'black' };
`
const DiceNumber = styled.p`
    font-size: 22px;
    font-weight: 800;
`

export { Page, RollButton, DiceContainer, Dice, DiceNumber }
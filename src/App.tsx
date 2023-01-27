import { useState } from 'react'
import { Page, RollButton, Dice, DiceContainer, DiceNumber } from './styles'

type IDie = {
    value: number
    hold: boolean
}

const App = () => {
    const [ dice, setDice ] = useState<IDie[]>([])


    const rollDice = () => {
        if(dice.length < 1) {
            const a = getNRandomNumbers(20)
            const dice: IDie[] = a.map(
                (elem: number) => {
                    return {
                        value: elem,
                        hold: false
                    }
                }
            )
            console.log(`Initial Dice Roll: ${ dice }`)
            setDice(dice)
            return
        }

        const currentState = [...dice]
        currentState.forEach(
            (elem: IDie) => {
                if(!elem.hold) {
                    elem.value = getRandomNumber()
                }
            }
        )

        setDice(currentState)
    }

    const toggleDieHold = (index: number) => {
        console.log(`Toggle dice index ${ index }`)
        const currentState = [...dice]
        currentState[index].hold = !currentState[index].hold
        setDice(currentState)
    }

    const renderDice = () => {
        console.log(dice)
        return dice.map(
            (elem: IDie, index: number) => {
                return <Die key={index} index={index} die={elem} onClick={ (index: number) => toggleDieHold(index) } />
            }
        )
    }

    return (
        <Page>
            <h1>ROLL SOME DICE</h1>
            <RollButton onClick={ () => rollDice() }>ROLL DICE</RollButton>
            <DiceContainer>
                {
                    dice.length > 1 ?
                    renderDice() : <></>
                }
            </DiceContainer>
        </Page>
    )
}

type DieProps = {
    die: IDie
    index: number
    onClick: (index: number) => void
}
const Die = ({
    die,
    index,
    onClick
}: DieProps) => {
    console.log(die)
    return (
        <Dice hold={die.hold} onClick={ () => onClick(index) }>
            <DiceNumber>{ die.value }</DiceNumber>
        </Dice>

    )
}

const getNRandomNumbers = (n: number): number[] => {
    return Array.from({length: n}, () => Math.ceil(Math.random() * 6))
}
const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6)
}

export default App;

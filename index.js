$(document).ready(function() {
    let player = "X"

    const tOne = $('#1')
    const tTwo = $('#2')
    const tThree = $('#3')
    const tFour = $('#4')
    const tFive = $('#5')
    const tSix = $('#6')
    const tSeven = $('#7')
    const tEight = $('#8')
    const tNine = $('#9')

    const haveThree = (col1, col2) => {
        return col1.length >= 3 || col2.length >= 3
    }

    const threeInARow = () => {
        // debugger
        // return comparePotentialWins(col1) || comparePotentialWins(col2)
        let potentialWins = ['123', '456', '789', '147', '258', '369', '159', '357']
        let winningCombo = potentialWins.filter(function(win) {
            let check = win.split('')
            return $(`#${check[0]}`).text() === $(`#${check[1]}`).text() && $(`#${check[1]}`).text() === $(`#${check[2]}`).text() &&
                ($(`#${check[0]}`).text() !== '' && $(`#${check[1]}`).text() !== '' && $(`#${check[2]}`).text() != '')

        })
        if (winningCombo.length > 0) {
            return true
        } else {
            return false
        }
    }

    // const comparePotentialWins = (col) => {
    //     let id = col.toArray().map(function(div) { return div.id }).join('')
    //     return potentialWins.some(function(win) { return win === id })
    // }
    const isGameOver = () => {
        let filledNodes = $('.tile').filter(function() { return $(this).text() !== '' })
        let exes = filledNodes.filter(function() { return $(this).text() === 'X' })
        let ohs = filledNodes.filter(function() { return $(this).text() === 'O' })
        return haveThree(exes, ohs) && threeInARow()
    }


    const nextTurn = () => {
        player === 'X' ?
            player = 'O' :
            player = 'X'
        $('#status').text(`Player ${player}'s Turn`)
    }

    const endGameSequence = () => {
        $('#status').text(`GAME OVER ${player} wins!`)
    }


    $('.tile').click(function() {
        event.target.innerHTML = player
        isGameOver() ?
            endGameSequence() :
            nextTurn();
    })

})
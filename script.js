const meters = parseFloat(prompt('Digite um valor em metros:'))
let unit = prompt('Digite a unidade para qual deseja converter km, hm, dam, dm, cm ou mm')
let result

switch(unit) {
    case 'mm':
        result = meters * 1000
        alert(`${meters}m equivale à ${result}mm.`)
        break
    case 'cm':
        result = meters * 100
        alert(`${meters}m equivale à ${result}cm.`)
        break
    case 'dm':
        result = meters * 10
        alert(`${meters}m equivale à ${result}dm.`)
        break
    case 'dam':
        result = meters / 10
        alert(`${meters}m equivale à ${result}dam.`)
        break
    case 'hm':
        result = meters / 100
        alert(`${meters}m equivale à ${result}hm.`)
        break
    case 'km':
        result = meters / 1000
        alert(`${meters}m equivale à ${result}km.`)
        break
    default:
        alert('Opção inválida!')
        break
}
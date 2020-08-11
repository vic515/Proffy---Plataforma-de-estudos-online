document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField () {
    const newField = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newField.querySelector('input')
    console.log(fields)

    document.querySelector('#schedule-items').appendChild(newField)
    
}
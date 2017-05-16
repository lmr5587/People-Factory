const personForm = document.querySelector('form')

const renderColor =(hairColor)=>{ 
    const colorDiv document.createElement('div')

    colorDiv.style.height=50px
     colorDiv.style.weight=100px
      colorDiv.style.backgroundColor= hairColor


  return colorDiv
}

const renderListItem = (name,value) => {
const li= document.createElement('li')
li.textcontent=`${name}:${value}`
return li
}

const renderList = () => {
    const list =document.createElement('ul')
  Object.keys(person).map((fieldName,_i,_keys)=>{
        let li= renderListItem(fieldName,person[fieldName])
        list.appendChild(li)
    })
    
    return list 
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

const person={
    name: form.personName.value,
    hairColor: form.haircolor.value,
    age: form.age.value
    birthplace:form.birthplace.value,
}
    
const list=renderList(person)
details.appendChild(renderList())
  
}

personForm.addEventListener('submit', handleSubmit)


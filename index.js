const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const colorDiv = `
    <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  `
var list = document.createElement('ul')
var text =document.createTextNode('Form Submition');
 list.appendChild(text);
 document.body.appendChild(list);

var listItemName = document.createElement('li')
var name =document.createTextNode(personName);
 listItemName.appendChild(name);
 document.body.appendChild(name);

var listItemColor = document.createElement('li')
var color = document.createTextNode(hairColor);
 listItemColor.appendChild(color);
 document.body.appendChild(listItemColor);

 var listItemAge = document.createElement('li')
var listAge =document.createTextNode(age);
 listItemAge.appendChild(listAge);
 document.body.appendChild(listItemAge);

 var listItemBirthplace = document.createElement('li')
var bplace =document.createTextNode(birthplace);
 listItemBirthplace.appendChild(bplace);
document.body.appendChild(listItemBirthplace);
//   details.innerHTML = `
    // <ul>
    //   <li>Name: ${personName}</li>
    //   <li>Hair Color: ${colorDiv}</li>
    //   <li>Age: ${age}</li>
    //   <li>Birthplace: ${birthplace}</li>
    // </ul>
//   `
}

personForm.addEventListener('submit', handleSubmit)
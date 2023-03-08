interface UserData extends Element {
  full_name: string
  email: string
  password: string
}

// variable that represent selector
const h1 = document.querySelector('h1')
const p_paragraph = document.querySelector('.paragraphType')
const p_with_id = document.querySelector('#valid_id')
const submit_button = document.querySelector('#submit')
const user_data: UserData[] = Array.from( document.querySelectorAll('.user_data') )

// esto está mal porque no hay fullname, email y password por cada [0, 1, 2] entrada del array
// las entradas son [0]: full_name, [1]: email y [2]: password
console.log(user_data[0].full_name)
console.log(user_data[0].email)
console.log(user_data[0].password)

// WIP traspilar TS
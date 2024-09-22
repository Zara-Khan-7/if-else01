// Making current users array
let current_Users = ["A","B","C","D"]

// Making new users array
let new_Users = ["E","A","F","D","G"]

// checking the avaialability of new users from current users
new_Users.forEach(new_one_user => {
    // Making a condition for comparing new users to current users
    let my_condition = current_Users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Using If-Else Statements for Printing Messages
    if(my_condition){
        console.log(`The ${new_one_user} username is already taken.`)
    }
    else{
        console.log(`The ${new_one_user}, is available.`)
    }
})
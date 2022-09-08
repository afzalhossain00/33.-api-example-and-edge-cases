// const loadUsers = () => {
//     fetch('https://randomuser.me/api/?results=50')
//         .then(res => res.json())
//         .then(data => displayUsers(data.results))
// }

// const displayUsers = users => {
//     const userContainer = document.getElementById('user-container')
//     for (const user of users) {
//         console.log(user)
//         const userDiv = document.createElement('div');
//         userDiv.classList.add('user')
//         userDiv.innerHTML = `
//         <h3>User Name: ${user.name.first} ${user.name.last}</h3>
//         <p>Email: ${user.email}</p>
//         <p>User Location: ${user.location.city} ${user.location.country}</p>
//         `
//         userContainer.appendChild(userDiv)
//     }
// }

// loadUsers()

const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];

console.log(dreamGirl[0].sokina.contactInfo[1].instagram)
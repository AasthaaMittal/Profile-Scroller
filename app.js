const data = [
    {
        name: 'John Doe',
        age: 30,
        gender: 'male',
        location: 'Boston',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Jen Swift',
        age: 26,
        gender: 'female',
        location: 'Miami',
        image: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    {
        name: 'William Smith',
        age: 36,
        gender: 'male',
        location: 'Lynn',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

//Event listener
function nextProfile(){
    const currentProf = profiles.next().value;

    if(currentProf !== undefined) {
        document.getElementById('imgDisplay').innerHTML = `<img src="${currentProf.image}">`;

        document.getElementById('profileDisplay').innerHTML = `
        <ul class = "list-group">
            <li class = "list-group-item">Name : ${currentProf.name}</li>
            <li class = "list-group-item">Age : ${currentProf.age}</li>
            <li class = "list-group-item">Gender : ${currentProf.gender}</li>
            <li class = "list-group-item">Location : ${currentProf.location}</li>
        </ul>
    `;
    }
    //reload if end of the data has reached
    else
        window.location.reload();
}
//Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false} :  { done: true};
        }

    };
}

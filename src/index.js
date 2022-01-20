fetch('http://localhost:3000/pups')
.then(r=>r.json())
.then(dogs => showDogs(dogs))

function showDogs(dogs){
    dogs.forEach(dog => {
        const dogNames = document.getElementById('dog-bar')
        const showNames = document.createElement('span')
        showNames.innerText = dog.name
        dogNames.append(showNames)
        
        showNames.addEventListener('click', e => {
            console.log(e)
            
            const dogInfo = document.getElementById('dog-info')
            const dogPic = document.createElement('img')
            const dogTitle = document.createElement('h2')
            const isGood = document.createElement('button')
            dogPic.src = dog.image
            dogTitle.textContent = dog.name
            isGood.innerText = 'This is a Good Dog: ' + dog.isGoodDog
            dogInfo.append(dogPic, dogTitle, isGood)

            isGood.addEventListener('click', e => {
                if (dog.isGoodDog === false){
                    dog.isGoodDog = true
                } else if (dog.isGoodDog === true){
                    dog.isGoodDog = false
                }isGood.innerText = 'This is a Good Dog: ' + dog.isGoodDog

                console.log('this dog is good', dog.isGoodDog)
            })
        })
    })

}
// The button's text should change from "Filter good dogs: OFF" to "Filter good dogs: ON", or vice versa.
function isGoodDog() {
    const filterBtn = document.querySelector('#good-dog-filter')
    filterBtn.addEventListener('click', (e) => {
        if (filterBtn.innerText = 'Filter good dogs: OFF'){
            filterBtn.innerText = 'Filter good dogs: ON'
        } else {
            filterBtn.innerText = 'Filter good dogs: OFF'
        }
    })
}
isGoodDog()

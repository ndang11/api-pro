fetch('https://www.swapi.tech/api/films')
.then((res) => res.json())
.then((data) => {
  console.log(data)
  let titleOne = document.getElementById("paragraph-one")
  let titleTwo = document.getElementById("paragraph-two" )
  let titleThree = document.getElementById("paragraph-three" )
  let titleFour = document.getElementById("paragraph-four" )
  let titleFive = document.getElementById( "paragraph-five")
  let titleSix = document.getElementById("paragraph-six")
  for (let index = 0; index < data.result.length; index++) {
    titleOne.innerHTML = data.result[0].properties.title
    titleTwo.innerHTML = data.result[1].properties.title
    titleThree.innerHTML = data.result[2].properties.title
    titleFour.innerHTML = data.result[3].properties.title
    titleFive.innerHTML = data.result[4].properties.title
    titleSix.innerHTML = data.result[5].properties.title
  }
})
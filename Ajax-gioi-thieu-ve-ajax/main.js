const valueSearch = document.querySelector('.input-search')
const btnSearch = document.querySelector('.searchBtn')
const btnRemove = document.querySelector('.removeBtn')
const showGiphy= document.querySelector('.show-giphy')
const amountResult = document.querySelector('.amountResult')
const message = document.querySelector('.message')

// get data
const API_key = 'oy4dPH2oVoycIOSUN5fnMalRLwddYAKN'
let giphyArr = []
let htmls = []
let temp = ''
const getImage = (keyword, amount) => {
  temp = keyword
  axios.get(`http://api.giphy.com/v1/gifs/search`, {
    params: {
      q : keyword,
      api_key: API_key
    }
  })
  .then(function (response) {
    let resArr  = response.data.data
    console.log(giphyArr.length)
    for(let i = giphyArr.length ; i < (amount <= 50 ? amount : 50); i++){
      giphyArr.push(resArr[i].images.preview_gif.url)
    }
    displayGiphy()
  })
  .catch(function (error) {
    console.log(error);
  });
}
const displayGiphy = () => {
  console.log(htmls.length)
  for(let i = htmls.length; i < giphyArr.length; i++){
    htmls.push(`<img src="${giphyArr[i]}" alt="">`)
  }
  showGiphy.innerHTML = htmls.join(' ')
}

btnSearch.onclick = () => {
  let keyword = valueSearch.value
  let amount = amountResult.value
  console.log(temp, keyword)
  if(temp !== keyword && temp !== '') {
    giphyArr = []
    htmls = []
    console.log('reset')
  }
  getImage(keyword,amount)
}
// Remove giphy
btnRemove.onclick = () => {
  valueSearch.value = ''
  showGiphy.innerHTML = ''
}
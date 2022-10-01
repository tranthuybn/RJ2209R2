const valueSearch = document.querySelector('.input-search')
const btnSearch = document.querySelector('.searchBtn')
const btnRemove = document.querySelector('.removeBtn')
const showGiphy= document.querySelector('.show-giphy')
const amountResult = document.querySelector('.amountResult')
const message = document.querySelector('.message')

btnSearch.onclick = () => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${valueSearch.value}&api_key=oy4dPH2oVoycIOSUN5fnMalRLwddYAKN`)
    .then(function (response) {
      handleData(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}
function handleData(data){
  let htmls = ''
  if(amountResult.value <= data.length){
    message.textContent = `Trả về ${amountResult.value} trong tổng số ${data.length} giphy`
    for(let i = 0; i < amountResult.value; i++){
      htmls += `
      <img src="https://media.giphy.com/media/${data[i].id}/giphy.gif" alt="">
      `
    }
  } else {
    message.textContent = `Trả về tất cả ${data.length} giphy`
    for(let i = 0; i < data.length; i++){
      htmls += `
      <img src="https://media.giphy.com/media/${data[i].id}/giphy.gif" alt="">
      `
    }
  }
  showGiphy.innerHTML = htmls
}
btnRemove.onclick = () => {
  valueSearch.value = ''
  showGiphy.innerHTML = ''
}
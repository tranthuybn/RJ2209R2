class Pokemon{
    constructor(){
        this.limit = 100
        this.offset = 100
        this.offsetUnit = 100
        this.pokemonList = []
        this.pokemonListTable = document.querySelector('.pokemon-table')
        this.preBtn = document.querySelector('.pre-btn')
        this.nextBtn = document.querySelector('.next-btn')
    }
    getData(limit, offset){
        axios.get('https://pokeapi.co/api/v2/pokemon', {
            params: {
                limit,
                offset
            }
        })
        .then(res => {
            let {results} = res.data
            this.pokemonList = results
            this.displayPokemonList()
            return results
        })
        .catch(err => {
            console.log(err)
            return []
        })
    }
    displayPokemonList(){
        let htmls = ''
        this.pokemonList.forEach((pokemonItem,i) => {
            htmls += `
            <tr>
                <td>${i + 1}</td>
                <td>${pokemonItem.name}</td>
                <td><a href="${pokemonItem.url}">Click</a></td>
            </tr>
            `
        })
        this.pokemonListTable.innerHTML = htmls
    }
    handlePreviousBtn(){
        if(this.offset == 100){
            this.preBtn.classList.add('disable')
        } else {
            this.preBtn.classList.remove('disable')
            this.offset -= this.offsetUnit
            this.getData(limit,this.offset)
        }
    }
    handleNextBtn(){
        this.offset += this.offsetUnit
        this.getData(limit,this.offset)
    }
    handleEvent(){
        this.nextBtn.onclick = () => {this.handleNextBtn()}
        this.preBtn.onclick = () => {this.handlePreviousBtn()}
    }
    init() {
        this.getData(this.limit,this.offset)
        this.handleEvent()
    }
}
const po = new Pokemon()
po.init()
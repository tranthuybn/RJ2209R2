class Pokemon{
    constructor(){
        this.limit = 100
        this.offset = 0
        this.urlNext = ''
        this.urlPrevious = ''
        this.pokemonList = []
        this.pokemonListTable = document.querySelector('.pokemon-table')
        this.preBtn = document.querySelector('.pre-btn')
        this.nextBtn = document.querySelector('.next-btn')
    }
    async getData(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
            params: {
                limit: this.limit,
                offset: this.offset
            }
        })
        .then(res => res)
        .catch(err => {
            console.log(err)
            return []
        })
        return response 
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
    handlePaginations(){
        this.nextBtn.onclick = () => {
            if(this.urlNext){
                this.offset += this.limit
                this.callAPI()
            }
        }
        this.preBtn.onclick = () => {
            if(this.urlPrevious){
                this.offset -= this.limit
                this.callAPI()
            }
        }
    }
    handleDataFromAPI(res){
        let {results, next, previous} = res.data
        this.urlNext = next
        this.urlPrevious = previous
        this.pokemonList = results
        this.displayPokemonList()
        this.preBtn.classList.toggle('disable', !this.urlPrevious)
        this.nextBtn.classList.toggle('disable', !this.urlNext)
    }
    callAPI(){
        this.getData().then(res => this.handleDataFromAPI(res))
    }
    init() {
        this.callAPI()
        this.handlePaginations()
    }
}
const po = new Pokemon()
po.init()
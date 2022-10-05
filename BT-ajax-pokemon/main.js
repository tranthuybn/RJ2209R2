class Pokemon{
    constructor(){
        this.limit = 100
        this.offset = 0
        this.unitSetOffset = 100
        this.urlNext = ''
        this.urlPrevious = ''
        this.pokemonList = []
        this.pokemonListTable = document.querySelector('.pokemon-table')
        this.preBtn = document.querySelector('.pre-btn')
        this.nextBtn = document.querySelector('.next-btn')
    }
    async getData(limit, offset){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
            params: {
                limit,
                offset
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
    handlePaginations(button){
        let url = ''
        switch (button.className) {
            case 'next-btn' : 
               url = this.urlNext
               this.unitSetOffset = Math.abs(this.unitSetOffset)
               break
            case 'pre-btn' :
                url = this.urlPrevious
                this.unitSetOffset = -Math.abs(this.unitSetOffset)
                break
        }
        if(url){
            button.disabled = false
            this.offset += this.unitSetOffset
            this.getData(this.limit,this.offset).then(res => this.handleDataFromAPI(res))
        } else {
            button.disabled = true
        }
    }
    handleEvent(){
        this.nextBtn.onclick = (e) => {this.handlePaginations(e.target)}
        this.preBtn.onclick = (e) => {this.handlePaginations(e.target)}
    }
    handleDataFromAPI(res){
        let {results, next, previous} = res.data
        this.urlNext = next
        this.urlPrevious = previous
        this.pokemonList = results
        this.displayPokemonList()
    }
    init() {
        this.getData(this.limit,this.offset).then(res => this.handleDataFromAPI(res))
        this.handleEvent()
    }
}
const po = new Pokemon()
po.init()
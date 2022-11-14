import axios from 'axios'
import { useEffect, useState, useRef } from 'react'

interface PokemonItem {
    name: string
    url: string
}

interface DataType {
    count: number
    results: PokemonItem[]
    next: string | null
    previous: string | null
}

function PokemonList() {
    const [data, setData] = useState<DataType>()
    const [offset, setOffset] = useState(0)
    const limit = useRef(100)
    useEffect(() => {
        ;(async function getData() {
            const response = await axios
                .get('https://pokeapi.co/api/v2/pokemon', {
                    params: {
                        limit: limit.current,
                        offset,
                    },
                })
                .then((res) => setData(res.data))
                .catch((err) => {
                    console.log(err)
                    return []
                })
        })()
    }, [offset])
    return (
        <div>
            <div className="p-2">
                <button
                    disabled={!data?.previous}
                    className="btn btn-primary"
                    onClick={() => {
                        if (!!data?.previous) setOffset((prev) => prev - limit.current)
                    }}
                >
                    Presious
                </button>
                <button
                    disabled={!data?.next}
                    className="btn btn-outline-dark ms-2"
                    onClick={() => {
                        if (!!data?.next) setOffset((prev) => prev + limit.current)
                    }}
                >
                    Next
                </button>
            </div>
            <table className="table table-striped w-50">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name Pokemon</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.results.map((pokemon: PokemonItem, index: number) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{pokemon.name}</td>
                            <td>
                                <a href={pokemon.url}>Detail</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PokemonList

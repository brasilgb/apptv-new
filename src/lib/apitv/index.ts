export async function getDataFaturamento() {
    const res = await fetch('http://api.gruposolar.com.br:8085/api/tvfaturamento', {
        next: { revalidate: 10 },
    })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const faturamento = res.json();
    
    return faturamento;
}

export async function getDataEvolucao() {
    const res = await fetch('http://api.gruposolar.com.br:8085/api/tvevolucao', {
        next: { revalidate: 10 },
    })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const evolucao = res.json()
    
    return evolucao;
}
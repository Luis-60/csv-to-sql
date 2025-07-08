#!/usr/bin/env node
// Transformar um csv para um sql
const fs = require('fs')
const path = require('path')

const [,, caminhoCSV, nomeTabela] = process.argv

if (!caminhoCSV || !nomeTabela){
    console.error('X Uso: csv-to-sql <arquivo.csv> <nome_tabela>')
    process.exit(1)
}

const arquivoCSV = path.resolve(caminhoCSV)
const saidaSQL = path.join(process.cwd(), `${nomeTabela}.sql`)

try {
    const csv = fs.readFileSync(arquivoCSV, 'utf-8')
    const linhas = csv.trim().split('\n')
    const colunas = linhas[0].split(',')

    const valores = linhas.slice(1).map(linha => {
        return '(' + linha.split(',').map(v => {
            return isNaN(v) ? `'${v.replace(/'/g, "''")}'` : v
        }).join(', ') + ')'
    })

    const sql = `INSERT INTO ${nomeTabela} (${colunas.join(', ')}) VALUES\n` + valores.join(',\n') + ';'

    fs.writeFileSync(saidaSQL, sql)
    console.log(` Arquivo SQL gerado: ${saidaSQL}`)
} catch (err){
    console.error(` Erro ao processar CSV: ${err.message}`)
    process.exit(1)
}
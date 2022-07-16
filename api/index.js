const cheerio = require('cheerio')
const axios = require('axios').default
const express = require('express')
const cors = require("cors")

const corsOptions ={
   origin:'*',
   credentials:true,
   optionSuccessStatus:200,
}
const app = express()
const port = 8000

app.use(cors(corsOptions))


const results = []
const website = 'https://webslovnik.zoznam.sk/anglicko-slovensky/?s='


const queryWebsite = async (query) => {
    const url = website + query
    const response = await axios.get(url)
    
    const html = await response.data
    const $ = cheerio.load(html)
    const li = $('.translate-result-list > li').toArray()
    const result = []
    li.forEach((el) => {
        const obj = {
            variant: $(el).find('strong').text(),
            variantMeanings: $(el).find('p > a').toArray().map(value => {
                return $(value).text().replace('\n', '').trim()
            })
        }
        result.push(obj)
    })
    
    return result
}


app.get('/translate/:search', (req, res) => {
    const query = req.params.search
    let result
    if(result = results.find(value => value.query === query)) {
        res.send(result)
    }
    else {
        result = queryWebsite(query)
        result.then(response => {
            if(response.length > 0) {
                if(results.length == 200) {
                    results.pop()
                }
                results.push({
                    query: query,
                    result: response
                })
                res.send(JSON.stringify(results[results.length - 1]))
            }
            else {
                res.send('{}')
            }
        })
    }
})





app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
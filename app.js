(async () => {
    const { prompt } = require('enquirer')
    const axios = require('axios')

    const { data } = await axios.get('https://raw.githubusercontent.com/RDAppel/survey/master/questions.json')
    const questions = data

    console.log(await prompt(questions))
})()



const getData = async () => {
    try {
        let response = await fetch('../feed/sample.json')
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  export {getData}
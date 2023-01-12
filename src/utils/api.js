import axios from "axios";

const fetchData = async (url) => {
  try {
    const res = await axios.get(url)
    const result = await res.data
    return result
  } catch (err) {
    if (axios.isCancel(err)) console.log('axios cancelled')
    else console.log(err)
  } 
}

export default fetchData
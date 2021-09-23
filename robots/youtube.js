const { getSubtitles } = require('youtube-captions-scraper')
const file = require('./file.js')
const axios = require('axios');

const limit = 50
const apiKey = "AIzaSyCnkUqWaGBlv--x-5MsferNDuW4dO_wUuo"
const channelId = "UC4ncvgh5hFr5O83MH7-jRJg" // Flow
// const channelId = "UCGBPo-CBLiMKxivaiF-MBiA"  // Cortes

async function youtube(pageToken) {
  console.log(`Page token: ${pageToken||"FIRST"}`)
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${limit}&key=${apiKey}&pageToken=${pageToken}`
  console.log(url)
  try {
    const {data} = await axios.get(url)
    console.log(data.nextPageToken)
    for (const item of data.items) {
      var videoID = item.id.videoId
      console.log(`Video Id: ${videoID}`)
      try{
        var captions = await getSubtitles({videoID,lang: 'pt'})
        file.save(captions, videoID)
      }catch(err){
        console.log(err)
      }
    }
    // await youtube(data.nextPageToken)
  } catch (error) {
      console.log(error)
  }
}

module.exports = youtube

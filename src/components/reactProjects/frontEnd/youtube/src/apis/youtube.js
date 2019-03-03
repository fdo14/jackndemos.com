import axios from 'axios';

const KEY = 'AIzaSyAIAOv_inDe4rhgLCBKEhDPGPVgLaZpkro';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

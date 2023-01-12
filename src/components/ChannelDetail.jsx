import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { FetchfromAPI } from '../utils/FetchfromAPI';
const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();
  console.log(channelDetail, Videos)
  useEffect(() => {
    FetchfromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setchannelDetail(data?.items[0]));

    FetchfromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])



  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(83,0,0,1) 0%, rgba(176,0,0,1) 50%, rgba(83,0,0,1) 100%, rgba(159,70,70,1) 100%)',
          zIndex: 10, height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px'}}}/>
          <Videos videos={videos}/>
        
      </Box>

    </Box>
  )
}

export default ChannelDetail
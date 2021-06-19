import React from 'react'
export default function VideoItem({video}) {

    const openYoutubeLink = (id) =>{
        window.open(`https://youtube.com/watch?v=${id}`);
    }
    return (
        <div className="item" onClick={()=>openYoutubeLink(video.id.videoId)} >
            <img className='thumbnail' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className="righ-content description" >
                <div className='content'>
                    <h3 className='header'>{video.snippet.title}</h3>
                </div>
                <div className="video-details" >

                    <div className="left">
                        <p>{video.snippet.description}</p>
                        <div className="special" >
                            Channel name : {video.snippet.channelTitle}
                        </div>
                    </div>
                    
                    <div className="right">
                        <div className="special" >
                            Posted on : {new Date(video.snippet.publishedAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

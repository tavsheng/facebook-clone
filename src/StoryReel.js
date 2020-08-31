import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className = "storyReel">
            <Story image = "https://www.missionmedia.com/uploads/image/news/1080x1920_blog_post.jpg"
            profileSrc = "https://i.ytimg.com/vi/NupZzt15c4g/hqdefault.jpg"
            title = "Bruce"/>          
            <Story image = "https://i.pinimg.com/originals/e2/5d/ba/e25dbaa8b58a94a2febdabc753b3dcfc.png"
            profileSrc = "https://img.kub.media/kubmedia/images/1k46/5ed4af0539a64d09e612b443/article5ed4af10921656.02084129.jpg"
            title = "John"/> 
            <Story image = "https://cdn.cp.adobe.io/content/2/rendition/89fe6991-26d6-47f6-b106-7c4178ace99a/artwork/78dfc3b8-b7a6-45a2-a104-3a21eae2bfdb/version/0/format/jpg/dimension/width/size/300"
            profileSrc = "https://avatars.mds.yandex.net/get-zen_doc/1107063/pub_5b05511455876b15e0467a0f_5b056868256d5ce5fa3e5918/scale_1200"
            title = "William"/> 
            <Story image = "https://meetedgar.com/wp-content/uploads/2019/12/IMG_1695-576x1024.png"
            profileSrc = "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/09/StarLord-Guardians2-Profile.jpg/revision/latest/scale-to-width-down/340?cb=20170505123836&path-prefix=ru"
            title = "Brown"/> 
            <Story image = "https://media.sproutsocial.com/uploads/2019/06/Overstock-Instagram-Stories-ad.png"
            profileSrc = "https://24smi.org/public/media/person/2018/02/07/u0c1vkn9bkkv-nebula.jpg"
            title = "Garcia"/>   
        </div>
    )
}

export default StoryReel

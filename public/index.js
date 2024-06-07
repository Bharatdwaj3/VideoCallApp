const socket = io('/');
const peer = new Peer();
let myVideoStream;
let myId;
var videoGrid =  document.getElementByID('videoDiv')
var myvideo = document.createElement('video');

myvideo.muted = true;

const peerConnections = {}
navigator.mediaDevices,getUserMedia({
    video:true,audio:true
}).then((stream)=>{
    myVideoStream=stream;
    addVideo(myvideo, stream);
    peer.on('call',call=>{
        call.answer(stream);
        const vid = document.createElement('video');
        call.on('stream',userStream);
        addVideo(vid,userStream);
    })
    call.on("error",(err)=>{
        alert(err)
    })
    call.on("close",()=>{
        console.log(vid);
        vid.remove();
    })
    peerConnections[call.peer]=call;
})

const arrow = document.querySelector('.arrow')
const topicInfo = document.querySelector('.upload-size-hidden-topic')
const title = document.querySelector('.title')

arrow.onclick = () =>{
    topicInfo.classList.toggle('invisible')
    arrow.classList.toggle('rotate')
    title.classList.toggle('bold')
}
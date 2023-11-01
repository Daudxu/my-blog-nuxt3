export default defineNuxtPlugin(() => {

    // window._hmt = window._hmt || []
    const hm = document.createElement('script')
    hm.src = "https://hm.baidu.com/hm.js?1eab1937a49bb008b1cfc99c774200aa";
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
})
  
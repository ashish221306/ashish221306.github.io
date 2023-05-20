document.body.innerHTML+='\n<style>\n#share{\n    position: fixed;\n    right: 20px;\n    height: 50px;\n    cursor: pointer;\n    border-radius: 50%;\n    display: flex;\n    outline: none;\n    border: none;\n    padding: 10px;\n    box-shadow:0 0 5px 2px rgba(0,0,0,0.50);\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    bottom: 60px;\n}\n</style>\n<button id="share">\n<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">\n    </path>\n  </svg>\n</button>\n',window.onload=()=>{let btn=document.getElementById("share"),buttons=[{type:"whatsapp",url:`https://web.whatsapp.com/send?text=${document.description}%20${window.location.href}`,img:'<svg viewBox="0 0 32 32" class="whatsapp-ico"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg>'},{type:"facebook",url:`https://www.facebook.com/sharer.php?u=${window.location.href}`,img:'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>'},{type:"pinterest",url:`https://www.pinterest.com/pin/create/button?url=${window.location.href}&description=${document.description}`,img:'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><circle cx="24" cy="24" r="20" fill="#E60023"/><path fill="#FFF" d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884\tc0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067\tc0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201\tc-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927\tc4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473\tc-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473\tc0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336\tc0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283\tc-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0\tc0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387\tc0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024\tC36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"/></svg>'},{type:"twitter",url:`https://twitter.com/intent/tweet?url=${window.location.href}&text=${document.description}`,img:'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758\tc-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582\tc0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322\tc0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419\tc-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963\tc-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41\tc15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/></svg>'},{type:"tumbler",url:`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${window.location.href}&title=${document.title}&caption=${document.description}`,img:'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="v3tlMT4~zKpyDBb1xi0jWa" x1="6.825" x2="41.469" y1="5.537" y2="42.78" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0d61a9"/><stop offset="1" stop-color="#16528c"/></linearGradient><path fill="url(#v3tlMT4~zKpyDBb1xi0jWa)" d="M42,38c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28\tc2.209,0,4,1.791,4,4V38z"/><path d="M24.947,38c-6.7,0-6.894-7.308-6.894-8.141L18.007,23h-1.679C15.596,23,15,22.403,15,21.671V18.57\tc0-0.541,0.336-1.038,0.837-1.238c0.047-0.02,4.542-1.875,4.542-6.004c0-0.732,0.596-1.329,1.327-1.329h2.966\tC25.405,10.004,26,10.601,26,11.329V17h4.67c0.733,0,1.33,0.596,1.33,1.328v3.345C32,22.404,31.403,23,30.67,23H26v6.676\tc0.048,0.313,0.327,1.555,1.76,1.555c1.691,0,3.206-0.901,3.222-0.91c0.194-0.124,0.442-0.195,0.69-0.195\tc0.22,0,0.438,0.055,0.632,0.159C32.735,30.521,33,30.97,33,31.455v3.436c0,0.388-0.166,0.753-0.455,1.003\tC32.301,36.107,29.996,38,24.947,38z" opacity=".05"/><path d="M24.947,37.5c-6.214,0-6.394-6.858-6.394-7.641L18.503,22.5h-2.175c-0.457,0-0.828-0.372-0.828-0.829\tV18.57c0-0.338,0.21-0.649,0.522-0.774c0.053-0.021,4.856-1.979,4.856-6.468c0-0.457,0.371-0.829,0.827-0.829h2.966\tc0.458,0.003,0.828,0.375,0.828,0.83V17.5h5.17c0.458,0,0.83,0.371,0.83,0.828v3.345c0,0.456-0.372,0.827-0.83,0.827H25.5v7.211\tc0.002,0,0.211,2.02,2.26,2.02c1.827,0,3.413-0.942,3.479-0.982c0.123-0.078,0.275-0.123,0.433-0.123c0.137,0,0.273,0.034,0.396,0.1\tc0.27,0.148,0.433,0.427,0.433,0.73v3.436c0,0.242-0.103,0.47-0.282,0.625C31.988,35.717,29.816,37.5,24.947,37.5z" opacity=".07"/><path fill="#fff" d="M32,34.891c0,0.095-0.037,0.184-0.109,0.247C31.803,35.215,29.723,37,24.947,37\tc-5.726,0-5.893-6.409-5.893-7.141L19,22h-2.672C16.146,22,16,21.853,16,21.671V18.57c0-0.135,0.083-0.259,0.208-0.309\tc0.052-0.02,5.171-2.083,5.171-6.933c0-0.183,0.146-0.329,0.327-0.329h2.966C24.854,11,25,11.146,25,11.329V18h5.67\tc0.182,0,0.33,0.146,0.33,0.328v3.345C31,21.856,30.852,22,30.67,22H25v7.711c0,0.101,0.316,2.519,2.76,2.519\tc2.023,0,3.721-1.044,3.74-1.055c0.1-0.064,0.227-0.066,0.333-0.009C31.936,31.223,32,31.334,32,31.455V34.891L32,34.891z"/></svg>'}];function createbuttons(){let div=document.createElement("div");div.innerHTML+="\n    <style>\n    @keyframes boom{\n        0%{opacity: 0;}\n        100%{opacity:1;}\n    }\n    \n    .sharebuttons{\n        animation:boom 0.3s ease-in-out alternate;\n        position: fixed;\n        top: 0;\n        left: 0;\n        opacity:1;\n        z-index: 521;\n        min-height: 100vh;\n        min-width: 100%;\n        background: rgba(0, 0, 0, 0.7);\n        transition:all 0.1s ease-in-out;\n    }\n    .sharebuttons>div>button{\n        height: 50px;\n        cursor: pointer;\n        width: 50px;\n        border: none;\n        outline: none;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .sharebuttons>div{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        transform: translate(-50%,-50%);\n    }\n    .sharebuttons>div>button{\n        margin: 10px;\n    }\n    \n    \n    </style>\n    \n    ",div.classList="sharebuttons",div.onclick=()=>{event.currentTarget.remove()};let innerdiv=document.createElement("div");innerdiv.onclick=()=>{event.currentTarget.parentElement.remove()},buttons.forEach(button=>{innerdiv.innerHTML+=`\n         <button link=${button.url}>\n           ${button.img}\n         </button>\n        `}),div.appendChild(innerdiv),document.body.appendChild(div)}btn.onclick=e=>{navigator.share?navigator.share({title:document.title,text:document.description,url:window.location.href}).then(()=>console.log("Successful share")).catch(error=>console.log("Error sharing",error)):(createbuttons(),document.querySelectorAll(".sharebuttons button").forEach(bttn=>{bttn.onclick=function(){let linktoopen=bttn.getAttribute("link");var left=screen.width/2-400,top=screen.height/2-300;return window.open(linktoopen,"popup",`width=800,height=600,top=${top},left=${left}`),!1}}))}};
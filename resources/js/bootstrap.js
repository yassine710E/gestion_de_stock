import axios from 'axios';
// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: "d06cbdeb36836f964b74",
//     cluster: "mt1",
//     forceTLS: true
// });

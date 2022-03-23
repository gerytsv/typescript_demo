import { greeter, DEFAULT_USERS } from './greeter.js';

document.getElementById('userBase')!.innerHTML = greeter(DEFAULT_USERS[0]);
document.getElementById('reader')!.innerHTML = greeter(DEFAULT_USERS[1]);
document.getElementById('author')!.innerHTML = greeter(DEFAULT_USERS[2]);
document.getElementById('admin')!.innerHTML = greeter(DEFAULT_USERS[3]);

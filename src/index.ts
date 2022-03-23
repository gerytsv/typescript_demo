const greeter = (user: string) => {
    return `Hi, ${user}!`;
};

const user = 'gorgeous';

document.getElementById('app')!.innerHTML = greeter(user);

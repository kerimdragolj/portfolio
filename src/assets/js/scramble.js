// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText, rand) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * rand)
            const end = start + Math.floor(Math.random() * rand)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud" style="color: #ffd90065">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
    'Kerim Dragolj',
    'Web developer',
    'Front-end developer',
    'Full-stack developer'
]

let counter = 0;

const next = () => {
    const el = document.querySelector('.name');
    if (el) {
        const fx = new TextScramble(el);
        fx.setText(phrases[counter], 30).then(() => {
            setTimeout(next, 2500);
        })
        counter = (counter + 1) % phrases.length
    }
}

const writeBio = (text) => {
    const el2 = document.querySelector('.text');
    if (el2) {
        const fx2 = new TextScramble(el2);
        fx2.setText(text, 60)
    }
}

const writeAboutMe = (text, id) => {
    const el = document.querySelector('#' + id);
    if (el) {
        const fx = new TextScramble(el);
        fx.setText(text, 80);
    }
}






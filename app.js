document.addEventListener('alpine:init', () => {
    Alpine.data('doc', () => ({
        txt: '',
        init() {
            window.addEventListener('beforeunload', () => this.save());
            window.addEventListener('blur', () => this.save());

            if (localStorage.txt) {
                this.txt = localStorage.txt;
            }
        },
        markdown() {
            return marked.parse(this.txt);
        },
        letters() {
            return this.txt.length;
        },
        words() {
            return this.txt.length > 0 ? this.txt.split(' ').length : 0;
        },
        save() {
            localStorage.txt = this.txt;
        }
    }));
});
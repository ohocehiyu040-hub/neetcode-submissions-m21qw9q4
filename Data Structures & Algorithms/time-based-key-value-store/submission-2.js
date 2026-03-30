class TimeMap {
    constructor() {
        this.store = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store[key]) {
            this.store[key] = [];
        }
        this.store[key].push({value, timestamp})
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store[key]) {
            return ''
        }
        const values = this.store[key];
        let l = 0;
        let r = values.length - 1;
        let result = ''

        while (l <= r) {
            const mid = Math.floor ((l + r) / 2);
            if (values[mid].timestamp <= timestamp) {
                result = values[mid].value
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return result;

    }
}

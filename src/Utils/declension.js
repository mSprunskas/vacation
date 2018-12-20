const MAP_ACCUSATIVE = [
    {
        from: 'a',
        to: 'ą',
    },
    {
        from: 'a',
        to: 'ą',
    },
    {
        from: 'a',
        to: 'ą',
    },
    {
        from: 'as',
        to: 'ą',
    },
    {
        from: 'ė',
        to: 'e',
    },
    {
        from: 'is',
        to: 'į',
    },
    {
        from: 'us',
        to: 'ų',
    },
    {
        from: 'ys',
        to: 'į',
    },
];

const MAP_DATIVE = [
    {
        from: 'a',
        to: 'ai',
    },
    {
        from: 'as',
        to: 'ui',
    },
    {
        from: 'ė',
        to: 'ei',
    },
    {
        from: 'tis',
        to: 'čiui',
    },
    {
        from: 'dis',
        to: 'džiui',
    },
    {
        from: 'is',
        to: 'iui',
    },
    {
        from: 'us',
        to: 'ui',
    },
    {
        from: 'tys',
        to: 'čiui',
    },
    {
        from: 'dys',
        to: 'džiui',
    },
    {
        from: 'ys',
        to: 'ui',
    },
];

const changeEnding= (name, map) => {
    for (let item of map) {
        if (name.endsWith(item.from)) {
            let pos = name.lastIndexOf(item.from);
            return name.substring(0, pos) + item.to;
        }
    }

    return name;
};

const replaceWith = (fullname, map) => {
    let replaced = [];
    let parts = fullname.split(' ');

    for (let part of parts) {
        replaced.push(changeEnding(part, map))
    }

    return replaced.join(' ');
};

/**
 * @param {string} fullname
 * @returns {string}
 */
const accusative = (fullname) => {
    return replaceWith(fullname, MAP_ACCUSATIVE);
};

/**
 * @param {string} fullname
 * @returns {string}
 */
const dative = (fullname) => {
    return replaceWith(fullname, MAP_DATIVE);
};

export { accusative, dative };

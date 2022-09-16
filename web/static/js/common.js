/**
 * Created by RTT.
 * Author: teocci@yandex.com on 2022-6월-10
 */
const REGEX_SNAKE_CASE = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
const REGEX_CAMEL_CASE = /[^a-zA-Z0-9]+(.)/g
const REGEX_PASCAL_CASE = /\w\S*/g

const isFunction = f => f instanceof Function
const isBoolean = b => 'boolean' === typeof b
const isNumber = n => 'number' === typeof n
const isString = s => 'string' === typeof s
const isNull = a => a == null
const isUndefined = a => a === undefined

const serialize = o => JSON.stringify(o)

const unserialize = s => JSON.parse(s)

const trimSpaces = s => s && s.replace(/\s+/g, ' ').trim()
const toSnakeCase = s => s && trimSpaces(s).match(REGEX_SNAKE_CASE)
    .map(x => x.toLowerCase())
    .join('_')
const toKebabCase = s => s && trimSpaces(s).match(REGEX_SNAKE_CASE)
    .map(x => x.toLowerCase())
    .join('-')
const toCamelCase = s => s && toSnakeCase(s).toLowerCase()
    .replace(REGEX_CAMEL_CASE, (m, chr) => chr.toUpperCase())
const toPascalCase = s => s && trimSpaces(s).toLowerCase()
    .replace(REGEX_PASCAL_CASE, m => `${m.charAt(0).toUpperCase()}${m.substring(1).toLowerCase()}`)

const simpleMerge = (...objects) => objects.reduce((p, o) => ({...p, ...o}), {})

const rand = (min, max) => Math.random() * (max - min) + min

const truncate = (n, p) => Math.trunc(n * Math.pow(10, p)) / Math.pow(10, p)

const round = (n, p) => Math.trunc((n + Number.EPSILON) * Math.pow(10, p)) / Math.pow(10, p)

const addPadding = (n, length = null) => String(n).padStart(length ?? 2, '0')

const fnv32a = (str, asString = true) => {
    let h = 0x811c9dc5
    for (let i = 0; i < str.length; ++i) {
        h ^= str.charCodeAt(i)
        h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)
    }

    h = h >>> 0

    return asString ? (h).toString(16) : h
}

const hash53 = (str, seed = 0, asString = true) => {
    const len = str.length
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed
    for (let i = 0, ch; i < len; i++) {
        ch = str.charCodeAt(i)
        h1 = Math.imul(h1 ^ ch, 2654435761)
        h2 = Math.imul(h2 ^ ch, 1597334677)
    }

    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
    const h = 4294967296 * (2097151 & h2) + (h1 >>> 0)

    return asString ? h.toString(16) : h
}

function serializeDate() {
    const now = new Date()
    return `${now.getFullYear()}${addPadding(now.getMonth() + 1)}${addPadding(now.getDate())}${addPadding(now.getHours())}${addPadding(now.getMinutes())}`
}

function distanceFormatter(d, precision = 2) {
    const rx = /\.0+$|(\.\d*[1-9])0+$/
    const lookup = [
        {value: 1, symbol: ''},
        {value: 1e3, symbol: 'k'},
        {value: 1e6, symbol: 'M'},
        {value: 1e9, symbol: 'G'},
        {value: 1e12, symbol: 'T'},
        {value: 1e15, symbol: 'P'},
        {value: 1e18, symbol: 'E'},
    ]
    const item = lookup.slice().reverse().find(item => d >= item.value) ?? {value: 1, symbol: ''}
    const val = (d / item.value).toFixed(precision).replace(rx, '$1')

    return `${val} ${item.symbol}m`
}

function wait(ms, fn) {
    const start = performance.now()
    let end = start
    while (end < start + ms) end = performance.now()
    if (fn instanceof Function) fn()
}

function currentDate(){
    const today = new Date();
    return  `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
}
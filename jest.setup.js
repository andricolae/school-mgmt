import '@testing-library/jest-dom'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))

global.Request = jest.fn().mockImplementation(() => ({
    url: 'http://localhost:3000',
    method: 'GET',
    headers: new Map(),
}))

global.Response = jest.fn().mockImplementation(() => ({
    json: jest.fn(),
    status: 200,
}))
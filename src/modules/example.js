// export a function from a file
export const helloWorldFunction = () => {
    console.log("Hello, world!");
}

/**
 * Export a class from a file
 * @author Ben Magnin <bm13563@my.bristol.ac.uk>
 * @return {void}
 */
export class helloWorldClass{
    constructor() {
        console.log("Hello, world!");
    }

    /**
     * Prints hello world to the console
     * @author Ben Magnin <bm13563@my.bristol.ac.uk>
     * @return {void}
     */
    helloWorld = () => {
        console.log("Hello, world!");
    }
}
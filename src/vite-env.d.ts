/// <reference types="vite/client" />

/// <reference types="vite/client" />

// Add image declarations
declare module '*.png' {
    const value: string;
    export default value;
}
declare module '*.jpg' {
    const value: string;
    export default value;
}
declare module '*.jpeg' {
    const value: string;
    export default value;
}
declare module '*.svg' {
    const value: string;
    export default value;
}
import react from 'react'

declare module 'react' {
    interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
        // extends React's HTMLAttributes
    valign?: string;
    }
}

// For CSS
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

// For LESS
declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}

// For SCSS
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
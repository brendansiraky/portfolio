import react from 'react'

declare module 'react' {
    interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
        // extends React's HTMLAttributes
    valign?: string;
    }
}
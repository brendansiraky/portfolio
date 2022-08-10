const ExternalLink: React.FC<{ href: string, children: JSX.Element }> = ({ href, children }) => {
    return <a href={href} target="_blank">{children}</a>
}

export default ExternalLink
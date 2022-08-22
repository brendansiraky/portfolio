import ReactMarkdown from "react-markdown"

import { Project as ProjectType } from '../../../../types/Landing'
import { makeUrl } from '../../../../utility/makeUrl'
import { ShadowContainer, Source, Technology } from '../../../shared'
import styles from './Project.module.scss'

type ProjectProps = ProjectType

export const Project: React.FC<ProjectProps> = ({ name, short_description, long_description, technologies, sources, image }) => {
    const { data: { attributes: { url, alternativeText } } } = image

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h2>Featured Project</h2>
                <h1>{name}</h1>
                <div className={styles.description}>
                    <p>{short_description}</p>
                </div>
                <div className={styles.technologiesWrapper}>
                    {technologies.map(technology => <Technology key={technology.name} {...technology} />)}
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.imageWrapper}>
                    <img alt={alternativeText} src={makeUrl(url)} />
                </div>
                <ShadowContainer className={styles.descriptionWrapper}>
                    <ReactMarkdown children={long_description} />
                    {sources.map(source => <div key={source.name} className={styles.sourceWrapper}><Source {...source} /></div>)}
                </ShadowContainer>
            </div>
        </div>
    )
}
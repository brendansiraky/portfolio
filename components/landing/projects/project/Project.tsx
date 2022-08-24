import ReactMarkdown from "react-markdown"

import { Project as ProjectType } from '../../../../types/Landing'
import { ShadowContainer, Source, Technology } from '../../../shared'
import styles from './Project.module.scss'

type ProjectProps = ProjectType

export const Project: React.FC<ProjectProps> = ({ name, label, short_description, long_description, technologies, sources }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h2>Featured Project</h2>
                <h1>{label}</h1>
                <div className={styles.description}>
                    <p>{short_description}</p>
                </div>
                <div className={styles.technologiesWrapper}>
                    {technologies.map(technology => <Technology key={technology.name} {...technology} />)}
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.imageWrapper}>
                    <div className={`${styles.image} ${styles[name]}`} />
                </div>
                <ShadowContainer className={styles.descriptionWrapper}>
                    <ReactMarkdown>
                        {long_description}
                    </ReactMarkdown>
                    <div className={styles.sourcesWrapper}>
                        {sources.map(source => <div key={source.name} className={styles.sourceWrapper}><Source {...source} /></div>)}
                    </div>
                </ShadowContainer>
            </div>
        </div>
    )
}
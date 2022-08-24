import ReactMarkdown from 'react-markdown'
import { Archive } from '../../../../types/Landing'
import { ShadowContainer, Source, Technology } from '../../../shared'
import styles from './Project.module.scss'

type ProjectProps = Archive

export const Project: React.FC<ProjectProps> = ({ name, description, technologies, sources }) => {
    return (
        <li>
            <ShadowContainer className={styles.wrapper}>
                <div>
                    <div className={styles.bannerWrapper}>
                        <svg className={styles.icon} />
                        <div className={styles.sourcesWrapper}>
                            {sources?.map(source => (
                                <div key={source.name} className={styles.sourceWrapper}>
                                    <Source {...source} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.titleWrapper}>
                        <h3>{name}</h3>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <ReactMarkdown>
                            {description}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className={styles.technologiesWrapper}>
                    {technologies.map(technology => <div key={technology.name} className={styles.technologyWrapper}><Technology {...technology} /></div>)}
                </div>
            </ShadowContainer>
        </li>
    )
}
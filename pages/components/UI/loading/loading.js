import Layout from '../layout/layout';
import styles from '../../../../styles/Home.module.scss';

export default function Loading() {
    return (
        <Layout>
            <section>
                <h1 className={styles.title}>Firebolt</h1>
                <h2 className={styles.subTitle}>Loading...</h2>
            </section>
        </Layout>
    )
}
import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Master Python the Right Way 🐍
        </Heading>
        <p className="hero__subtitle">
          Learn Object-Oriented Programming, SOLID Principles, and Design Patterns using Python
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/OOP/overview"
          >
            Start with OOP 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageHighlights() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Object-Oriented Programming</h3>
              <p>Understand Abstraction, Inheritance, Polymorphism, and Encapsulation with real Python code examples.</p>
              <Link to="/docs/OOP/overview" className="button button--outline button--sm">Learn OOP</Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>SOLID Principles</h3>
              <p>Write clean, scalable, and maintainable Python code with SOLID principles at the core.</p>
              <Link to="/docs/SOLID/overview" className="button button--outline button--sm">Explore SOLID</Link>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Design Patterns</h3>
              <p>Learn real-world patterns like Singleton, Strategy, Factory, and more—implemented in Python.</p>
              <Link to="/docs/Design Patterns/overview" className="button button--outline button--sm">Design Better</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn Python OOP, SOLID principles, and design patterns the right way">
      <HomepageHeader />
      <main>
        <HomepageHighlights />
      </main>
    </Layout>
  );
}




















// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           {/* <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link> */}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

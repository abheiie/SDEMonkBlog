import React from 'react';
import clsx from 'clsx';
import styles from './CustomFeatures.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'OOP (Object-Oriented Programming)',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2721/2721296.png',
    description: (
      <>
        Learn the core principles of Object-Oriented Programming including Encapsulation, Abstraction, Inheritance, and Polymorphism.
      </>
    ),
  },
  {
    title: 'SOLID Principles',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/906/906175.png',
    description: (
      <>
        Understand the SOLID design principles to write cleaner, modular, and maintainable code.
      </>
    ),
  },
  {
    title: 'Design Patterns',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077046.png',
    description: (
      <>
        Explore widely used software design patterns to improve the flexibility and reusability of your codebase.
      </>
    ),
  },
];

function Feature({title, imageUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={imageUrl} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CustomFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

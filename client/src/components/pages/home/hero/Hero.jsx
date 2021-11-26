import React from 'react';
import { HPrimary, Para } from '../../../utils/typography/Typography';
import sectionBackground from '../../../../helpers/sectionBackground';

import './hero.scss';
import { BSecondary } from '../../../utils/button/Button';

const Hero = () => {
	return (
		<section
			className="hero-section"
			style={sectionBackground('/assets/background/hero.jpg')}
		>
			<div className="hero-section__content">
				<HPrimary className="hero-section__heading">lavish</HPrimary>
				<Para className="hero-section__para">
					we provide luxuries clothes and jewelry to you at reasonable
					price.
				</Para>
			</div>
			<BSecondary title="explore" className="hero-section__button" />
		</section>
	);
};

export default Hero;

import React, { Component } from 'react';
import './DoContent.css';

import teamImg from './teamwork.jpg'
import interactionsImg from './interactions.jpg'
import mentorImg from './mentorship.jpg'
import FaCaretRight from 'react-icons/lib/fa/caret-right'

class DoContent extends Component {
	render () {
		return (
			<section className="pillar-section semi-transparent-box">
				<h2>What is Purposeful?</h2>
				<p className="pillar-summary">
					We are building a creative space for people to find purpose in their
					lives through collaborating with others on projects that
					they believe in. By connecting people around common goals, Purposeful will be a
					launchpad to turn ideas, dreams, and aspirations into reality.
					 Purposeful stands on three main pillars: Ideas,
					Mentorship, and Interactions.
				</p>
				<section className="pillar-container">
					<p className="pillar">
						<h3> <FaCaretRight/><span id="ideas-color0"> Ideas </span></h3>
						<img src={interactionsImg} alt=""/>
						<p className="pillar-desc">Share your idea with the world and collaborate with others to start a project
						that is important to you, or discover and join a project that ignites your passion.</p>
					</p>
					<p className="pillar">
						<h3> <FaCaretRight/><span id="ideas-color1"> Mentorship </span></h3>
						<img src={mentorImg} alt=""/>
						<p className="pillar-desc">Find a mentor to guide you through learning a new skill that interests you, or
						give back by sharing your knowledge and expertise through teaching others.</p>
	        		</p>
					<p className="pillar">
						<h3><FaCaretRight/><span id="ideas-color2"> Interactions </span></h3>
						<img src={teamImg} alt=""/>
						<p className="pillar-desc">Come together with new people who share your interests in online
						chat sessions to see what you can create. We also aspire to set up office space(s) where people can
						collaborate and engage beyond the virtual world.</p>
					</p>
				</section>
			</section>
		);
	}
}

export default DoContent;

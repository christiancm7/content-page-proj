import React from 'react'

export const Reviews = () => {
    return (
        <div id="reviews-container">
            <div class="ui medium header">Verified Reviews</div>
            <div className="text-container review-item">
                <div className="reviews-avatar">
                    <i className="massive grey user circle outline icon"></i>
                    <div id="avatar-name" className="ui center aligned header"><p>John Smith</p></div>
                    <div>Location</div>
                </div>
                <p className="reviews-text">"I am not a novice trader. Quite the opposite. I worked for Goldman and Morgan Stanley, taught options at Hofstra university some years back and retired now. I followed some of your videos and trading techniques and they are the same as mine. As I don't have time to do all the analysis I would just as easily follow yours probablt wirh a little of my own twist here and there. You can save me a lot of time and I think we can all make some money even though this is more of a hobby for me now. I think you do a great job.</p>
            </div>
            <div className="text-container review-item">
                <div className="reviews-avatar">
                <i className="massive grey user circle outline icon"></i>
                    <div id="avatar-name2" className="ui center aligned header"><p>John Smith</p></div>
                    <div>Location</div>
                </div>
                <p className="reviews-text">"I am not a novice trader. Quite the opposite. I worked for Goldman and Morgan Stanley, taught options at Hofstra university some years back and retired now. I followed some of your videos and trading techniques and they are the same as mine. As I don't have time to do all the analysis I would just as easily follow yours probablt wirh a little of my own twist here and there. You can save me a lot of time and I think we can all make some money even though this is more of a hobby for me now. I think you do a great job.</p>
            </div>
        </div>
    )
}

export default Reviews
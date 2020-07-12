import React from 'react';
import placeholder from '../../assets/placeholder2.png'
import './css-animation.scss';
import useIntersect from '../../hooks/useIntersect';

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const Card = () => (
    <div className="card">
        <img className="card-img-top" src={placeholder} alt="Card cap" />
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

        </div>
        <div className="card-footer">
            <button type="button" className="btn btn-link">Read More</button>
        </div>
    </div>
)

const CSSAnimation = () => {
    const [ref, entry] = useIntersect({
        threshold: buildThresholdArray()
    })
    return (
        <section className="css-cards container-fluid">
           <div className="row card-deck"  ref={ref}>
                <div className={`col-sm-4 ${entry.intersectionRatio > 0 ? 'fade-in-right' : ''}`}>
                    <Card />
                </div>
                <div className="col-sm-4 fade-in">
                    <Card />
                </div>
                <div className="col-sm-4 fade-in-left">
                    <Card />
                </div>
            </div>
            <div className="btn-container">
                <button type="button" class="btn btn-light">Primary</button>
            </div>
        </section>
    );
}

export default CSSAnimation;
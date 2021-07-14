
import React from 'react';


const SetIntersectionObserver = (props) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting);
            })
        })

    const { current } = domRef;
    observer.observe(current)

    return () => observer.unobserve(current)
    }, [])


    return (
        <div className={`fade-in-section fade-in-type${props.type} fade-in-${props.direction} ${isVisible ? "is-visible" : ""}`} ref={domRef}>
            {props.children}
        </div>
    )
    
}

export default SetIntersectionObserver;
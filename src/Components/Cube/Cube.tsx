import { useEffect, useRef } from 'react';
import p5 from 'p5';
import sketch from './CubeSketch.ts';
import './Cube.css';

const Cube = () => {
    const p5ContainerRef: any = useRef(null);

    useEffect(() => {
        const p5Instance = new p5(sketch, p5ContainerRef.current);
        return () => {
            p5Instance.remove();
        }
    }, []);

    return (
        <div className="cube-container" ref={p5ContainerRef} />

    );
};


export default Cube;
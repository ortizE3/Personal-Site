import side from '../../assets/side.png'
import './About.css'

function About() {
    return (
        <div className='about-container'>
            <div className='about-item about-section'>
                <div>Hi, I’m Ethan Ortiz,</div>
                <hr />
                A software engineer based in Austin, Texas, with a passion for blending technology and creativity. I specialize in web development with Angular, .NET, and React,
                I also enjoy artistic programming. For exmaple the cube above uses p5js and is running in real time (check sources for more info).
                Whether I'm crafting generative art with p5.js, experimenting with Blender Python, or exploring algorithmic design, I thrive at the intersection of code and creativity.
                <div>Outside of programming, I’m an avid fan of Marvel comics, video games (especially Halo), and pushing the boundaries of digital expression.
                    I’m always excited to collaborate on innovative projects that fuse art and technology!</div>
            </div>
            <div className='about-item' id='side'>
                <img src={side} alt="side" />
            </div>
        </div>
    )
}

export default About
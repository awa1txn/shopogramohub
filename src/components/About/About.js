import './About.scss';

export default function About() {
    let string = `Soon, here is going to appear some new text that completely describes this project.`
    return (
    <>
    <div className='aboutContent'>
        <div className="">
            {'  '+string}
        </div>
    </div>
    </>
    );
}
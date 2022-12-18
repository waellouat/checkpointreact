import react from 'react';
import Project1 from './project/Project1';
import Pro2 from './project/Pro2';
import Pro3 from './project/Pro3';
import Pro4 from './project/Pro4';
import '../App.css'
const Pro = () =>{
    return (
        <div>
                <section id="projects">

        <h2 class="text-important">Projects</h2>
        <div class="projects-container">
        <Project1/>
        <Pro2/>
        <Pro3/>
        <Pro4/>

            </div>
            </section>

            </div>
    )
}
export default Pro ;
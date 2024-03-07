import projects from '../utils/projects/projects';
import services from '../utils/projects/services';
//COMPONENTS
import { Layout, Projects } from '../components';


export default function() {
    return (
        <Layout title="Projects">
            <Projects
                projects={projects}
                services={services}
            />
        </Layout>
    )
}
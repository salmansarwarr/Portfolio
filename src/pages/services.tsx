import services from '../utils/Services';
//COMPONENTS
import { Layout, Services } from '../components';


export default function() {
    return (
        <Layout title="Services">
            <Services
                services={services}
            />
        </Layout>
    )
}
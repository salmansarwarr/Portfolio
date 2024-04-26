import { useRouter } from 'next/router';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function Header() {
    const router = useRouter();
    const screen680 = useMediaQuery('(max-width: 680px)');
    const screen370 = useMediaQuery('(max-width: 370px)');


    return (
        <AppBar position="sticky" elevation={5} sx={{backgroundColor: 'rgb(31 41 55)'}} className={`bg-gray-800 ${screen370&&`pb-2`}`}>
            <Toolbar className={`d-flex justify-content-center align-items-center ${screen370?`flex-column`:`flex-row`} ${screen370&&`ml-3`}`}>
                <h1 className={`flex-1 text-5xl ${screen370&&`mt-2.5`}`}>
                    <span className="badge cursor-pointer selection:bg-transparent myHoverEffect1" onClick={() => router.asPath !== '/' && router.push('/')}> Portfolio </span>
                </h1>

                <div className="d-flex">
                    {router.asPath !== '/projects' && (
                        <div className="border-b-2 border-white rounded-sm mt-0.5">
                            <Button
                                onClick={() => router.push('/projects')} disableRipple variant="text"
                                className="fw-bold text-white capitalize mb-1 myHoverEffect1"
                                style={{ fontSize: screen680?"1.175rem":"1.075rem" }}
                            >
                                Projects
                            </Button>
                        </div>
                    )}
    
                    {router.asPath !== '/services' && (
                        <div className="border-b-2 border-white rounded-sm ml-2 mt-0.5">
                            <Button
                                onClick={() => router.push('/services')} disableRipple variant="text"
                                className="fw-bold text-white capitalize mb-1 myHoverEffect1"
                                style={{ fontSize: screen680?"1.175rem":"1.075rem" }}
                            >
                                Services
                            </Button>
                        </div>
                    )}

                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
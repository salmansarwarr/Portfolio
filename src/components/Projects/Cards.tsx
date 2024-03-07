import Image from 'next/image';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';


type CardsProps = {
    name: string;
    technologies: string;
    url: string;
    pic: any;
}

function Cards({
    name,
    technologies,
    url,
    pic
}: CardsProps) {
    const screen400 = useMediaQuery('(min-width: 400px)');


    return (
        <Card raised sx={{ maxWidth: 345 }} style={{ margin: "0 auto"}} className="bg-dark rounded-sm">
            <CardActionArea>
                <a href={url} target={screen400?`_blank`:``}>
                    <Image src={pic}/>
                </a>
            </CardActionArea>

            <CardContent style={{ borderTop: "1px solid #BEBEBE" }}>
                <Typography gutterBottom variant="h5" component="div" className="cursor-pointer text-light">
                    {name}
                </Typography>

                <span className="text-gray-200 text-sm"
                    dangerouslySetInnerHTML={{__html: technologies}}
                />

                <a href={url} target={screen400?`_blank`:``} className="btn-md fw-bold outline-none shadow-none tracking-wider p-1.5 mt-2.5 d-flex justify-content-center align-items-center bg-light text-black no-underline" role="button" style={{ borderRadius: 4 }}>
                    <span className="text-sm">Visit</span> <LogoutIcon className="mt-1 ml-1.5" fontSize="small"/>
                </a>
            </CardContent>
        </Card>
    )
}

export default Cards;
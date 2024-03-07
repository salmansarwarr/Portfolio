import Image from 'next/image';
//MATERIAL-UI
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';


type ListsProps = {
    name: string;
    detail: string;
    pic: any;
}

function Lists({
    name,
    detail,
    pic
}: ListsProps) {
    return (
        <Card raised className="ml-9 mr-8 mt-2 mb-2 myHoverEffect4 border-2 border-gray-200">
            <CardActionArea>
                <ListItem>
                    <ListItemAvatar>
                        <div
                            style={{
                                width: (name==="HTML"||name==="CSS")?49:(name==="JAVASCRIPT"||name==="TYPESCRIPT"||name==="ECMASCRIPT")?40:(name==="SOLIDITY"?27:((name==="REACT JS"||name==="NEXT JS"||name==="REACT NATIVE"||name==="CONTEXT")?48:(name==="GATSBY JS"?43:(name==="REDUX"?41:(name==="ZUSTAND"?80:(name==="PWA"?52:(name==="NODE JS"?40:(name==="REST API"?41:(name==="GRAPHQL"?39:(name==="JAM STACK"?41:name==="MERN STACK"?55:((name==="CONTENTFUL")?43:(name==="BOOTSTRAP"?39:(name==="MATERIAL UI"?51:(name==="STYLED COMPONENT"?40:(name==="SQL"?53:(name==="GREMLIN"?44:(name==="MYSQL"?44:(name==="MSSQL"?48:(name==="MSSQL"?55:(name==="POSTGRESQL"?38:(name==="MONGODB"?50:(name==="FAUNADB"?44:(name==="VERCEL"?39:(name==="NETLIFY"?44:(name==="TESTING"?39:((name==="S3 ( AWS )"||name==="LAMBDA ( AWS )"||name==="DYNAMODB ( AWS )"||name==="COGNITO ( AWS )"||name==="APIGATEWAY ( AWS )")?39:(name==="FIGMA"?48:45))))))))))))))))))))))))))),
                                height: (name==="HTML"||name==="CSS")?49:(name==="JAVASCRIPT"||name==="TYPESCRIPT"||name==="ECMASCRIPT")?40:(name==="SOLIDITY"?27:((name==="REACT JS"||name==="NEXT JS"||name==="REACT NATIVE"||name==="CONTEXT")?28:(name==="GATSBY JS"?43:(name==="REDUX"?37:(name==="REST API"?41:(name==="GRAPHQL"?39:(name==="AWS"?38:(name==="CONTENTFUL"?42:(name==="BOOTSTRAP"?39:(name==="STYLED COMPONENT"?42:(name==="MSSQL"?50:(name==="POSTGRESQL"?39:(name==="FAUNADB"?44:(name==="VERCEL"?39:(name==="NETLIFY"?44:(name==="TESTING"?39:((name==="S3 ( AWS )"||name==="LAMBDA ( AWS )"||name==="DYNAMODB ( AWS )"||name==="COGNITO ( AWS )"||name==="APIGATEWAY ( AWS )")?39:45))))))))))))))))),
                                marginTop: (name==="HARDHAT")?13:(name==="HTML"||name==="CSS")?3:((name==="SASS")?6:(name==="JAVASCRIPT"||name==="TYPESCRIPT"||name==="ECMASCRIPT")?3:(name==="SOLIDITY"?-12:((name==="REACT JS"||name==="REACT NATIVE"||name==="CONTEXT")?-12:(name==="NEXT JS"?3:(name==="PWA"?-3:(name==="GRAPHQL"?-3:(name==="JAM STACK"?9:name==="MERN STACK"?-1:(name==="AWS"?17:(name==="CONTENTFUL"?1:(name==="TAILWIND"?4:((name==="MATERIAL UI"?2:(name==="STYLED COMPONENT"?5:(name==="SQL"?-4:(name==="MYSQL"?6:(name==="MSSQL"?2:(name==="POSTGRESQL"?5:(name==="MONGODB"?-2:(name==="FAUNADB"?5:(name==="VERCEL"?4:(name==="NETLIFY"?3:(name==="NETLIFY"?9:((name==="FIREBASE"||"FIRESTORE")?3:((name==="S3 ( AWS )"||name==="LAMBDA ( AWS )"||name==="DYNAMODB ( AWS )"||name==="COGNITO ( AWS )"||name==="APIGATEWAY ( AWS )")?-3:(name==="APPSYNC ( AWS )"?5:(name==="AMPLIFY ( AWS )"?3:(name==="FIGMA"?1:0))))))))))))))))))))))))))),
                                marginLeft: (name==="HTML"||name==="CSS")?-8:((name==="SASS")?-3:(name==="JAVASCRIPT"||name==="TYPESCRIPT"||name==="ECMASCRIPT")?-2:(name==="SOLIDITY"?3:((name==="REACT JS"||name==="NEXT JS"||name==="REACT NATIVE"||name==="CONTEXT")?-7:(name==="GATSBY JS"?-6:(name==="REDUX"?-4:(name==="ZUSTAND"?-22:(name==="PWA"?-6:(name==="NODE JS"?-2:(name==="REST API"?-4:(name==="GRAPHQL"?-5:(name==="JAM STACK"?-6:name==="MERN STACK"?-12:(name==="AWS"?-5:(name==="CONTENTFUL"?-5:(name==="BOOTSTRAP"?-3:(name==="TAILWIND"?-6:(name==="MATERIAL UI"?-10:(name==="STYLED COMPONENT"?-6:(name==="SQL"?-13:(name==="GREMLIN"?-5:(name==="MYSQL"?-5:(name==="MSSQL"?-7:(name==="POSTGRESQL"?-4:(name==="MONGODB"?-11:(name==="FAUNADB"?-3:(name==="VERCEL"?-4:(name==="NETLIFY"?-6:((name==="FIREBASE"||"FIRESTORE")?-8:(name==="TESTING"?-5:((name==="S3 ( AWS )"||name==="LAMBDA ( AWS )"||name==="DYNAMODB ( AWS )"||name==="COGNITO ( AWS )"||name==="APIGATEWAY ( AWS )")?-4:(name==="APPSYNC ( AWS )"?-7:(name==="AMPLIFY ( AWS )"?-7:(name==="FIGMA"?-8:0))))))))))))))))))))))))))))))))
                            }}
                        >
                            <Image src={pic}/>
                        </div>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<b>{name}</b>}
                        secondary={detail}
                        sx={{ marginLeft: (name==="ZUSTAND"?-0.5:0) }}
                    />
                </ListItem>
            </CardActionArea>
        </Card>
    )
}

export default Lists;
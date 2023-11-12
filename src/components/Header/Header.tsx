import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";
import { FC } from "react";

import ResponseAvatar from "../../themes/ResponsiveAvatar";
import ResponseNav from "../../themes/ResponsiveNav";



interface IHeaderProps {
    url : string | null
}

interface IHeaderInfo {
    text: string,
    url: string
}

const header: IHeaderInfo[] = [
    {
        text: "Мгту конференция",
        url: "#"
    },
    {
        text: "Главная",
        url: "#"
    },
    {
        text: "Информация",
        url: "#"
    },
]



const Header: FC<IHeaderProps> = ({ url }) => {
    console.log(url);
    console.log(header);
    return (
            <AppBar position="sticky">
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <Box sx={{width: "10%"}}>
                        <img src={process.env.PUBLIC_URL + '/bmstu.svg'} alt="" />
                    </Box>
                    <ResponseNav >
                        {
                            header.map((value) => (
                                <Link variant="body2" href={ value.url } sx={{fontSize: "inherit", color: "inherit", textDecoration: "none"}}> { value.text } </Link>
                            ))
                        }
                    </ResponseNav>
                    <Link href="/auth">
                        <Button variant="contained" color="secondary">Войти</Button>
                    </Link>
                    { url === null 
                        ? <ResponseAvatar src={'https://avatars.mds.yandex.net/i?id=c2f1a8224314b3b626d596805f0dbe1e05dcba82-5559980-images-thumbs&n=13'}/>
                        : <ResponseAvatar/>
                    }
                </Toolbar>
            </AppBar>
    );
}

export default Header;
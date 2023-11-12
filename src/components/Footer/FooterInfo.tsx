import { Box, Link, Typography } from '@mui/material'
import React, { FC } from 'react'
import ResponsiveFooterInfo from '../../themes/ResponsiveFooterInfo'

interface IColumn {
    header: string,
    links: string[]
};

interface IFooterInfoProps {
    info: IColumn[]
}

const FooterInfo: FC<IFooterInfoProps> = ({ info }) => {
  return (
    <ResponsiveFooterInfo>
        {
            info.map(value => {
                return (
                    <Box sx={{display: "flex", flexDirection: "column", gap: "5%"}}>
                        <Typography variant='h6'>{value.header}</Typography>
                        {
                            value.links.map(link => (
                                <Link variant="body2" href="#" sx={{color:"inherit", textDecoration: "none"}}>{ link }</Link>
                            ))
                        }
                    </Box>
                );
            })
        }
    </ResponsiveFooterInfo>
  )
}


export default FooterInfo;
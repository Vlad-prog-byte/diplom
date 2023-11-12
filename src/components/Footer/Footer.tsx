import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { FC } from 'react'
import FooterInfo from './FooterInfo'

const line = {
    backgroundColor: "white",
    width: "100%",
    height: "2px"
}

const footer_info = [
    {
        header: "Об университете",
        links: [
            "Сведения об образовательной организации",
            "Противодействие коррупции",
            "Официальные документы",
            "Сведения о доходах",
            "Руководство университета"
        ]
    },
    {
        header: "Контакты",
        links: [
            "Контакты и схема проезда",
            "По общим вопросам",
            "bauman@bmstu.ru",
            "По вопросам поступления",
            "По вопросам медиаподдержки",
            "media@bmstu.ru",
            "Техническая поддержка сайта",
            "Банковские реквизиты"
        ]
    },
    {
        header: "Важное",
        links: [
            "FAQ",
            "Электронные обращения",
            "Обработка данных пользователей"
        ]
    }

]

const Footer: FC = () => {
  return (
        <Box sx={{backgroundColor: blue[900], paddingBottom: "15px"}}>
            <FooterInfo info={footer_info}/>
            <div style={line}></div>
            <Typography variant="body2" align="center" sx={{color: "white", paddingTop: "10px"}}>
                Министерство науки и высшего образования Российской Федерации
                © 2023 Московский государственный технический университет им. Н.Э. Баумана
            </Typography>
        </Box>
  )
}


export default Footer;
import {Box, Container, Typography} from "@material-ui/core";
import StyleInfo from "./StyleInfo";
import {useSelector} from "react-redux";

const Info = () => {
    const classes = StyleInfo();
    const {info, children} = useSelector(store => store.user);

    return (
        <Container maxWidth={'md'}>
            <Box marginTop={'50px'}>
                <Typography variant={'h5'}>
                    Персональные данные
                </Typography>
                <Typography variant={'h6'}>
                    {
                        info.name && (`${info.name} , ${info.age}`)
                    }
                </Typography>
            </Box>
            <Box marginTop={'50px'}>
                <Typography variant={'h5'}>
                    Дети
                </Typography>

                {children.map(item => (
                    <Box marginTop={'20px'} key={item.id}>
                        <Typography component={'span'} className={classes.childItem}>
                            {item.name}, {item.age} лет
                        </Typography>
                    </Box>
                ))}
            </Box>

        </Container>
    )
}

export default Info;
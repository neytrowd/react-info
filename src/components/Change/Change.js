import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch, useSelector} from "react-redux";
import {ADD, CHANGE} from "../../redux/userReducer";
import {useHistory} from 'react-router-dom';

const Change = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {info, children} = useSelector(store => store.user);
    const [userData, setUserData] = useState({name: '', age: ''})
    const [childData, setChildData] = useState({name: '', age: ''});
    const [userChildren, setUserChildren] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [addVisible, setAddVisible] = useState(true);

    const deleteHandler = (id) => () => {
        let children = userChildren.filter(item => item.id !== id);
        setUserChildren(prevState => children)
    }

    const addHander = () => {
        setUserChildren(prevState => ([
            ...prevState,
            {
                id: Date.now(),
                name: childData.name,
                age: childData.age
            }
        ]));
        setChildData({name: '', age: ''})
    }

    const saveHandler = () => {
        dispatch({type: ADD, payload: userChildren})
        dispatch({type: CHANGE, payload: userData})
        history.push('/')
    }

    const userHandler = (e) => {
        setUserData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const childHandler = (e) => {
        setChildData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const formToggle = () => {
        setFormVisible(prevState => !prevState)
    }

    useEffect(() => {
        setUserData(info);
        setUserChildren(children);
    }, [info]);

    useEffect(() => {
        if (userChildren.length > 4) {
            setAddVisible(false);
            setFormVisible(false);
            return;
        }
        setAddVisible(true);
    }, [userChildren])

    return (
        <Container maxWidth={'md'}>
            <Box marginTop={'50px'}>
                <Typography variant={'h5'}>
                    Персональные данные
                </Typography>
                <TextField
                    variant="outlined" fullWidth label="Имя"
                    name="name" margin="normal" value={userData.name}
                    onChange={userHandler}
                />
                <TextField
                    variant="outlined" fullWidth label="Возраст" type={'number'}
                    name="age" margin="normal" value={userData.age}
                    onChange={userHandler}
                />
            </Box>

            <Box marginTop={5}>
                <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                    <Typography variant={'h5'}>
                        Дети (макс. 5)
                    </Typography>
                    {addVisible && (
                        <Button variant={"contained"} color={"primary"} onClick={formToggle}>
                            Добавить
                        </Button>
                    )}
                </Box>

                {formVisible && (
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={5}>
                            <TextField
                                variant="outlined" fullWidth label="Имя" value={childData.name}
                                name="name" margin="normal" onChange={childHandler}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <TextField
                                variant="outlined" fullWidth label="Возрост" value={childData.age}
                                type={'number'} name="age" margin="normal" onChange={childHandler}
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <Box paddingTop={3}>
                                <Button variant="contained" color="primary" fullWidth onClick={addHander}>
                                    Добавить ребенка
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Box>

            {userChildren.length > 0 && (
                <Box marginTop={3}>
                    <List>
                        <ListItem>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={6}>
                                    <Typography variant={'h6'}>
                                        Имя
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} lg={5}>
                                    <Typography variant={'h6'}>
                                        Возраст
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} lg={1}>
                                    <Typography variant={'h6'}>
                                        Действие
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>

                        {userChildren.map(item => (
                            <ListItem key={item.id}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} lg={6}>
                                        <Box paddingTop={2}>{item.name}</Box>
                                    </Grid>
                                    <Grid item xs={12} lg={5}>
                                        <Box paddingTop={2}>{item.age}</Box>
                                    </Grid>
                                    <Grid item xs={12} lg={1}>
                                        <IconButton edge="end" onClick={deleteHandler(item.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Divider/>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}

            <Box marginTop={5} marginBottom={5}>
                <Button variant="contained" color="primary" onClick={saveHandler}>
                    Сохранить
                </Button>
            </Box>
        </Container>
    )
}

export default Change;